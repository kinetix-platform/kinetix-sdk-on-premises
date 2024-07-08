import httpStatus from "http-status";
import virtualWorldService from "#common/services/repository/virtualWorld.js";
import HttpError from "../../common/helpers/error.js";
import cacheService from "#common/services/cache.js";

const { FORBIDDEN, UNAUTHORIZED } = httpStatus;
export default (deleteToken) => async (req, res, next) => {
  const token = req.headers["x-api-token"];
  if (!token) {
    return next(
      new HttpError(
        null,
        {},
        UNAUTHORIZED,
        "Missing generation token",
        "missingToken",
      ),
    );
  }
  const data = await cacheService.get(`sdk-token-${token}`);
  if (deleteToken) {
    await cacheService.del(`sdk-token-${token}`);
  }

  if (!data?.vwId || !data?.userId || !data?.keyId) {
    return next(
      new HttpError(
        null,
        {},
        FORBIDDEN,
        "Wrong generation token",
        "wrongToken",
      ),
    );
  }
  const vw = await virtualWorldService.getBy({ id: data.vwId });
  const [user] = await vw.getUsers({ where: { virtualWorldId: data.userId } });
  if (!vw || !user) {
    return next(
      new HttpError(
        null,
        {},
        FORBIDDEN,
        "Wrong generation token",
        "wrongToken",
      ),
    );
  }

  req.keyId = data.keyId;
  vw.keyId = data.keyId;
  req.vw = vw;
  req.user = user;
  req.token = token;
  req.parentProcess = data?.parent;
  return next();
};
