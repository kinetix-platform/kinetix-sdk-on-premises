import httpStatus from "http-status";
import HttpError from "#api/helpers/error.js";
import planService from '#common/services/repository/plan.js';

const { INTERNAL_SERVER_ERROR } = httpStatus;

class Controller {
  async get(req, res, next) {
    try {
      const plans = await planService.getAll({});
      res.send(plans);
    } catch (e) {
      return next(new HttpError(null, e, INTERNAL_SERVER_ERROR, 'An error occured'));
    }

  }
}

export default new Controller();