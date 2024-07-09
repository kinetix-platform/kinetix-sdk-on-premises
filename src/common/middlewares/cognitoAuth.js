import { CognitoJwtVerifier } from "aws-jwt-verify";
import httpStatus from "http-status";
import HttpError from "../../common/helpers/error.js";
import cognitoAuthService from "#common/services/repository/cognitoAuth.js";
import logger from "#common/services/logger.js";

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

    req.user = payload;
  } catch (e) {
    logger.error(`Error validating token : ${e}`);
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
