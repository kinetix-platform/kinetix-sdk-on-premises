import httpStatus from "http-status";
import HttpError from "#api/helpers/error.js";

const { UNAUTHORIZED, FORBIDDEN } = httpStatus;

export default async (req, res, next) => {
  try {
    const { user, adminUser, impersonate } = req;
    if (adminUser && impersonate) return next();

    const allowed = user["cognito:groups"]?.includes("admin");
    if (!allowed) {
      return next(new HttpError(null, {}, FORBIDDEN, "User access limited."));
    }
  } catch (e) {
    return next(new HttpError(null, {}, UNAUTHORIZED, e.message));
  }
  return next();
};
