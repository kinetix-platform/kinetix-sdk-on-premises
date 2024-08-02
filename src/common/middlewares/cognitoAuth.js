import httpStatus from "http-status";
import HttpError from "#common/helpers/error.js";
import logger from "#common/helpers/logger.js";
import { verifier } from "#common/helpers/cognito.js";

const { UNAUTHORIZED } = httpStatus;

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
