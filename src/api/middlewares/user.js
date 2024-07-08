import httpStatus from "http-status";
import HttpError from "../error/index.js";

const { NOT_FOUND, INTERNAL_SERVER_ERROR } = httpStatus;
export default async (req, res, next) => {
  try {
    const { params, vw } = req;
    const { userId } = params;

    const [user] = await vw.getUsers({ where: { virtualWorldId: userId } });
    if (!user) {
      return next(new HttpError(null, {}, NOT_FOUND, "User not found."));
    }
    req.user = user;
    return next();
  } catch {
    return next(
      new HttpError(null, {}, INTERNAL_SERVER_ERROR, "An error occured."),
    );
  }
};
