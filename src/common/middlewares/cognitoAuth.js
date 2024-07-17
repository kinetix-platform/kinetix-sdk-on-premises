import { CognitoJwtVerifier } from "aws-jwt-verify";
import httpStatus from "http-status";
import HttpError from "#common/helpers/error.js";
import logger from "#common/helpers/logger.js";
import {
  COGNITO_USER_POOL_ID,
  COGNITO_CLIENT_ID,
} from "#common/config/constants.js";

const { UNAUTHORIZED } = httpStatus;

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

    req.user = payload;
  } catch (e) {
    logger.error(`Error validating token : ${e}`);
    return next(new HttpError(null, {}, UNAUTHORIZED, e.message));
  }

  return next();
};
