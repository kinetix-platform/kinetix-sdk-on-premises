import httpStatus from "http-status";
import HttpError from "../../common/helpers/error.js";

const { FORBIDDEN } = httpStatus;

export default async (req, res, next) => {
  const { vw } = req;
  const [key] = vw.keys;
  if (!key.canRead) {
    return next(new HttpError(null, {}, FORBIDDEN, "Wrong API key"));
  }
  return next();
};
