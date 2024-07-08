import httpStatus from "http-status";
import moment from "moment";
import cacheService from "#common/services/cache.js";
import HttpError from "#api/helpers/error.js";

const WINDOW_SIZE_IN_MINUTES = 5;
const WINDOW_LOG_INTERVAL_IN_MINUTES = 1;
const { TOO_MANY_REQUESTS, INTERNAL_SERVER_ERROR } = httpStatus;

export default (prefix, max_request) => async (req, res, next) => {
  const { vw: virtualWorld } = req;
  const MAX_WINDOW_REQUEST_COUNT = max_request;
  const redisKey = `sdk-api:rate-limiting:${prefix}:${virtualWorld.id}`;
  try {
    const record = await cacheService.get(redisKey);
    const currentRequestTime = moment();
    if (record == null) {
      let newRecord = [];
      let requestLog = {
        requestTimeStamp: currentRequestTime.unix(),
        requestCount: 1,
      };
      newRecord.push(requestLog);
      await cacheService.set(redisKey, JSON.stringify(newRecord));
      return next();
    }

    let windowStartTimestamp = moment()
      .subtract(WINDOW_SIZE_IN_MINUTES, "minutes")
      .unix();
    let requestsWithinWindow = record.filter((entry) => {
      return entry.requestTimeStamp > windowStartTimestamp;
    });
    let totalWindowRequestsCount = requestsWithinWindow.reduce(
      (accumulator, entry) => {
        return accumulator + entry.requestCount;
      },
      0,
    );

    if (
      MAX_WINDOW_REQUEST_COUNT > 0 &&
      totalWindowRequestsCount >= MAX_WINDOW_REQUEST_COUNT
    ) {
      return next(
        new HttpError(
          null,
          {},
          TOO_MANY_REQUESTS,
          `You have exceeded the ${MAX_WINDOW_REQUEST_COUNT} requests in ${WINDOW_SIZE_IN_MINUTES} minutes limit!`,
          "rateLimiting",
        ),
      );
    } else {
      let lastRequestLog = record[record.length - 1];
      let potentialCurrentWindowIntervalStartTimeStamp = currentRequestTime
        .clone()
        .subtract(WINDOW_LOG_INTERVAL_IN_MINUTES, "minute")
        .unix();
      if (
        lastRequestLog.requestTimeStamp >
        potentialCurrentWindowIntervalStartTimeStamp
      ) {
        lastRequestLog.requestCount++;
        record[record.length - 1] = lastRequestLog;
      } else {
        record.push({
          requestTimeStamp: currentRequestTime.unix(),
          requestCount: 1,
        });
      }
      await cacheService.set(redisKey, JSON.stringify(record));
      next();
    }
  } catch (error) {
    return next(
      new HttpError(error, {}, INTERNAL_SERVER_ERROR, "An error occured."),
    );
  }
};
