import { CognitoJwtVerifier } from "aws-jwt-verify";
import httpStatus from "http-status";
import HttpError from "../../common/helpers/error.js";
import cognitoAuthService from "#common/services/repository/cognitoAuth.js";
import logger from "#common/services/logger.js";
import cacheService from "#common/services/cache.js";
import awsService from "#common/services/aws.js";

const { COGNITO_USER_POOL_ID, COGNITO_CLIENT_ID, COGNITO_ALLOWED_GROUPS } =
  process.env;

const { UNAUTHORIZED, FORBIDDEN } = httpStatus;

const verifier = CognitoJwtVerifier.create({
  userPoolId: COGNITO_USER_POOL_ID,
  tokenUse: "access",
  clientId: COGNITO_CLIENT_ID,
});

export default async (req, res, next) => {
  let payload;
  try {
    const { headers, cookies } = req;
    const accessToken =
      cookies.kinetixCognito || headers.authorization?.split(" ")?.[1];

    payload = await verifier.verify(accessToken);
    if (COGNITO_ALLOWED_GROUPS !== "*") {
      const groups = COGNITO_ALLOWED_GROUPS?.split(" ");
      const forbidden = !groups?.some((group) =>
        payload["cognito:groups"]?.includes(group),
      );
      if (forbidden) {
        return next(new HttpError(null, {}, FORBIDDEN, "User access limited."));
      }
    }

    const isAdmin = payload["cognito:groups"]?.includes("admin");
    req.user = payload;
    req.user.isAdmin = isAdmin;
  } catch (e) {
    logger.error(`Error validating token : ${e}`);
    return next(new HttpError(null, {}, UNAUTHORIZED, e.message));
  }

  try {
    // Check for impersonation
    const impersonation = await cacheService.scan(
      `impersonate:${payload.username}:*`,
    );
    const targetUserUuid = impersonation?.[0]?.split(":")?.[3];
    if (targetUserUuid) {
      req.user = await awsService.getCognitoUserInfo(targetUserUuid);
      req.adminUser = payload;
      req.impersonate = true;
    }
  } catch (e) {
    logger.error(
      `Error impersonating for user ${req.user.username} : ${e.message}`,
    );
    return next(new HttpError(null, {}, UNAUTHORIZED, e.message));
  }
  try {
    await cognitoAuthService.createOrUpdate(req.user.username);
  } catch (e) {
    logger.error(
      `Error logging cognito authentication for user ${req.user.username} : ${e}`,
    );
  }
  return next();
};
