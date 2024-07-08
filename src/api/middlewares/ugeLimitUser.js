import moment from "moment";
import httpStatus from "http-status";
import HttpError from "#api/helpers/error.js";
import processesServce from "#common/services/dynamo.js";

const { NOT_FOUND, TOO_MANY_REQUESTS, INTERNAL_SERVER_ERROR } = httpStatus;

export default async (req, res, next) => {
  try {
    const { vw } = req;
    const { userId } = req.query;

    const [user] = await vw.getUsers({ where: { virtualWorldId: userId } });
    if (!user) {
      return next(new HttpError(null, {}, NOT_FOUND, "User not found."));
    }

    if (!vw.configuration.maxEmotes && vw.configuration.maxEmotes !== 0) {
      return next();
    }

    const processes = await processesServce.getProcessesByUser(user, false, {
      excludeSteps: ["render_failed", "association_failed"],
      excludeUnknownMLError: true,
      excludePostMLError: true,
      excludeParent: true,
      limitDate: moment().subtract("1", "day"),
      limit: vw.configuration.maxEmotes || 10,
    });

    if (
      vw.configuration.maxEmotes &&
      processes.length >= vw.configuration.maxEmotes
    ) {
      return next(
        new HttpError(
          null,
          {},
          TOO_MANY_REQUESTS,
          "Too many processes for today for this user.",
          "tooManyUserProcesses",
        ),
      );
    }

    return next();
  } catch (error) {
    return next(
      new HttpError(error, {}, INTERNAL_SERVER_ERROR, "An error occured."),
    );
  }
};
