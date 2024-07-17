import httpStatus from "http-status";
import logger from "#common/helpers/logger.js";
import HttpError from "#common/helpers/error.js";

const { INTERNAL_SERVER_ERROR, ACCEPTED } = httpStatus;

class Controller {
  async handler(req, res, next) {
    try {
      res.status(ACCEPTED);
    } catch (e) {
      logger.error(e.message, e);
      return next(
        new HttpError(null, {}, INTERNAL_SERVER_ERROR, "An error occured"),
      );
    }
  }
}

export default new Controller();
