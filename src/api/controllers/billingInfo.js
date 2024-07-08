import httpStatus from "http-status";
import billingService from "#common/services/repository/billingInfo.js";
import HttpError from "#api/helpers/error.js";

const { INTERNAL_SERVER_ERROR, NOT_FOUND, FORBIDDEN } = httpStatus;

class Controller {
  async create(req, res, next) {
    try {
      const { user, body } = req;
      const exists = await billingService.getBy({ cognitoUuid: user.username });
      if (exists) {
        return next(
          new HttpError(null, {}, FORBIDDEN, "Billing info already exist"),
        );
      }
      const billingInfos = await billingService.create({
        cognitoUuid: user.username,
        ...body,
      });
      res.send(billingInfos);
    } catch (e) {
      return next(
        new HttpError(null, e, INTERNAL_SERVER_ERROR, "An error occured"),
      );
    }
  }

  async get(req, res, next) {
    try {
      const { user } = req;
      const billingInfos = await billingService.getBy({
        cognitoUuid: user.username,
      });
      if (!billingInfos) {
        return next(
          new HttpError(
            null,
            {},
            NOT_FOUND,
            "Billing informations not specified",
          ),
        );
      }
      res.send(billingInfos);
    } catch (e) {
      return next(
        new HttpError(null, e, INTERNAL_SERVER_ERROR, "An error occured"),
      );
    }
  }
}

export default new Controller();
