import httpStatus from "http-status";
import vwService from "#common/services/repository/virtualWorld.js";
import keyService from "#common/services/repository/key.js";
import HttpError from "../helpers/error.js";
import logger from "#common/services/logger.js";
import virtualWorldService from "#common/services/repository/virtualWorld.js";
import cacheService from "#common/services/cache.js";

const { FORBIDDEN, INTERNAL_SERVER_ERROR, BAD_REQUEST, NOT_FOUND, CONFLICT } =
  httpStatus;

const { MAX_VW_KEYS_COUNT, MAX_VW_COUNT } = process.env;

class Controller {
  async createKey(req, res, next) {
    try {
      const { body, vw } = req;
      const { canRead, canWrite, expire } = body;

      if (expire && new Date(expire) <= new Date()) {
        return next(
          new HttpError(null, {}, BAD_REQUEST, "Expire must be in the future"),
        );
      }
      const existingKeys = await vw?.getKeys({ raw: true });
      if (existingKeys.length >= (MAX_VW_KEYS_COUNT || 1)) {
        return next(
          new HttpError(null, {}, FORBIDDEN, "Maximum allowed keys."),
        );
      }

      const key = await vwService.createKey(vw, canRead, canWrite, expire);
      res.send(key.toJSON(false));
    } catch {
      return next(
        new HttpError(null, {}, INTERNAL_SERVER_ERROR, "An error occured."),
      );
    }
  }

  async listKeys(req, res, next) {
    try {
      const { vw } = req;
      const filter = {
        virtualWorldId: vw.id,
      };
      const keys = await keyService.getAll(filter);
      res.send(keys);
    } catch (e) {
      logger.error("List keys failed", e);
      return next(
        new HttpError(null, {}, INTERNAL_SERVER_ERROR, "An error occured."),
      );
    }
  }

  async get(req, res, next) {
    try {
      const { vw } = req;
      res.send({
        name: vw.name,
        ...vw.configuration,
      });
    } catch (e) {
      logger.error("Get VW failed", e);
      return next(
        new HttpError(null, {}, INTERNAL_SERVER_ERROR, "An error occured."),
      );
    }
  }

  async list(req, res, next) {
    try {
      const { user } = req;
      const virtualWorlds = await vwService.getAll({
        cognitoUuid: user.username,
      });
      res.send(virtualWorlds);
    } catch (e) {
      logger.error(e.message, e);
      return next(
        new HttpError(null, {}, INTERNAL_SERVER_ERROR, "An error occured."),
      );
    }
  }

  async create(req, res, next) {
    try {
      const { user, body } = req;
      const { name, website, webhookUri, mainUsage } = body;

      const existingVirtualWorlds = await vwService.getAll({
        cognitoUuid: user.username,
      });
      if (existingVirtualWorlds.length >= (MAX_VW_COUNT || 1)) {
        return next(
          new HttpError(null, {}, FORBIDDEN, "Maximum allowed virtual worlds."),
        );
      }

      const virtualWorld = await vwService.create({
        name,
        configuration: {
          allowUGC: true,
          allowPremium: true,
          website,
          webhookUri,
          mainUsage,
        },
        cognitoUuid: user.username,
      });
      res.send(virtualWorld);
    } catch (e) {
      logger.error(e.message, e);
      return next(
        new HttpError(null, {}, INTERNAL_SERVER_ERROR, "An error occured."),
      );
    }
  }

  async update(req, res, next) {
    try {
      const { vw, body } = req;
      const { name, defaultAvatarUuid, ...rest } = body;
      const storedVW = await virtualWorldService.get(vw.id);
      let mustClearCacheEmotesUsers = false;

      if (name) {
        storedVW.name = name;
      }

      if (storedVW?.configuration?.defaultAvatarUuid !== defaultAvatarUuid) {
        mustClearCacheEmotesUsers = true;
      }

      storedVW.configuration = {
        ...storedVW.configuration,
        ...rest,
        defaultAvatarUuid,
      };

      await storedVW.save();

      const keys = await storedVW.getKeys();
      await Promise.all(keys.map((k) => cacheService.delVWKey(k.value)));

      // INVALID EMOTE CACHE
      if (mustClearCacheEmotesUsers) {
        await cacheService.flushEmotesVW(vw.uuid);
      }

      res.send({
        message: "VirtualWorld updated successfully",
        data: storedVW,
      });
    } catch (e) {
      logger.error(e.message, e);
      return next(
        new HttpError(null, {}, INTERNAL_SERVER_ERROR, "An error occured."),
      );
    }
  }

  async delete(req, res, next) {
    try {
      const { vw } = req;
      await vw.destroy();

      const keys = await vw.getKeys();
      await Promise.all(keys.map((k) => cacheService.delVWKey(k.uuid)));

      res.send({
        message: "Application deleted.",
        data: {
          uuid: vw.uuid,
        },
      });
    } catch (e) {
      logger.error(e.message, e);
      return next(
        new HttpError(null, {}, INTERNAL_SERVER_ERROR, "An error occured."),
      );
    }
  }

  async deleteKey(req, res, next) {
    try {
      const { vw, params } = req;
      const { keyUuid } = params;
      const keys = await vw?.getKeys();
      const key = keys.find((k) => k.uuid === keyUuid);
      await key.destroy();
      await cacheService.delVWKey(keyUuid);
      res.send({
        message: "Key deleted.",
        data: {
          uuid: keyUuid,
        },
      });
    } catch (e) {
      logger.error(e.message, e);
      return next(
        new HttpError(null, {}, INTERNAL_SERVER_ERROR, "An error occured."),
      );
    }
  }

  async getUsers(req, res, next) {
    try {
      const { vw } = req;
      const users = await vw.getUsers();
      return res.send(users);
    } catch (e) {
      logger.error(e.message, e);
      return next(
        new HttpError(null, {}, INTERNAL_SERVER_ERROR, "An error occured."),
      );
    }
  }

  async getUser(req, res, next) {
    const { vw, params } = req;
    const { userId } = params;

    const user = await vwService.hasUser(vw, userId);
    if (!user) {
      return next(new HttpError(null, {}, NOT_FOUND, "User not found"));
    }
    return res.send(user);
  }

  async createUser(req, res, next) {
    try {
      const { body, vw } = req;
      const { id } = body;
      const user = await vwService.createUser(vw, id);
      if (!user) {
        return next(
          new HttpError(
            null,
            {},
            CONFLICT,
            "User already exists",
            "alreadyExists",
          ),
        );
      }

      res.send(user);
    } catch {
      return next(
        new HttpError(null, {}, INTERNAL_SERVER_ERROR, "An error occured."),
      );
    }
  }
}

export default new Controller();
