import httpStatus from "http-status";
import HttpError from "#api/helpers/error.js";
import virtualWorldService from "#common/services/repository/virtualWorld.js";

const { NOT_FOUND, FORBIDDEN, INTERNAL_SERVER_ERROR } = httpStatus;

export default async (req, res, next) => {
  try {
    const { user, params } = req;
    const { uuid } = params;

    const vw = await virtualWorldService.getBy({ uuid });
    if (!vw) {
      return next(
        new HttpError(null, {}, NOT_FOUND, "VirtualWorld not found."),
      );
    }
    if (vw.cognitoUuid !== user.username && !user.isAdmin) {
      return next(
        new HttpError(
          null,
          {},
          FORBIDDEN,
          "You have no access to this virtualWorld.",
        ),
      );
    }
    req.vw = vw;
    return next();
  } catch {
    return next(
      new HttpError(null, {}, INTERNAL_SERVER_ERROR, "An error occured."),
    );
  }
};
