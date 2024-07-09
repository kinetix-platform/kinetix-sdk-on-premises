import httpStatus from "http-status";
import vwService from "#common/services/repository/virtualWorld.js";
import storeService from "#common/services/store.js";
import userService from "#common/services/repository/user.js";
import keyService from "#common/services/repository/key.js";
import HttpError from "../helpers/error.js";
import logger from "#common/services/logger.js";
import moment from "moment";
import virtualWorldService from "#common/services/repository/virtualWorld.js";
import cacheService from "#common/services/cache.js";

const {
  FORBIDDEN,
  INTERNAL_SERVER_ERROR,
  OK,
  BAD_REQUEST,
  NOT_FOUND,
  CONFLICT,
} = httpStatus;

const { MAX_VW_KEYS_COUNT, MAX_VW_COUNT, USE_WHITELIST } = process.env;

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
      const notDeletedKeys = existingKeys.filter((key) => !key.isDeleted);
      if (notDeletedKeys.length >= (MAX_VW_KEYS_COUNT || 1)) {
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
      const { vw, query } = req;
      const { all } = query;
      const filter = {
        virtualWorldId: vw.id,
      };
      if (!all) {
        filter.isDeleted = false;
      }
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

  async listUsage(req, res, next) {
    try {
      const { vw } = req;
      let usages = await vw.getUsages({
        order: [["periodStart", "DESC"]],
      });
      const startOfMonth = moment().utcOffset(0).startOf("months");
      // Fetching stored caches for every instances, for every API keys of the matching (vw/period) groups
      const caches = await cacheService.scan(
        `*usages:*:${vw.uuid}:${startOfMonth.unix()}:*`,
      );
      const cachedUsages = await Promise.all(
        caches.map(async (rawKey) => {
          const key = rawKey.split(":").slice(1).join(":");
          return cacheService.get(key);
        }),
      );
      if (cachedUsages.length) {
        // For each stored usage, find matching cached usage (if any) and merge
        usages = usages.map((usage) => {
          cachedUsages.forEach((cachedUsage) => {
            if (
              cachedUsage.keyId == usage.keyId &&
              cachedUsage.periodStart === usage.periodStart.toISOString()
            ) {
              Object.entries(cachedUsage).forEach(([key, value]) => {
                if (
                  key.toLowerCase().includes("id") ||
                  typeof value !== "number"
                ) {
                  if (!usage[key]) {
                    usage[key] = value;
                  }
                  return usage;
                }
                usage[key] = usage[key] ? usage[key] + value : value;
                return usage;
              });
              cachedUsage.merged = true;
            }
          });
          return usage;
        });
        // Then merge with the remaining cached usages not matching any stored usages.
        usages = [
          ...usages,
          ...cachedUsages.filter((cachedUsage) => !cachedUsage.merged),
        ];
      }
      if (!usages.length) {
        res.send([]);
      } else {
        res.send(usages);
      }
    } catch (e) {
      logger.error("List usages failed", e);
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
        isDeleted: false,
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
        isDeleted: false,
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

      console.log(storedVW?.configuration?.defaultAvatarUuid);
      console.log(defaultAvatarUuid);
      console.log(
        storedVW?.configuration?.defaultAvatarUuid !== defaultAvatarUuid,
      );

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
      vw.isDeleted = true;
      await vw.save();

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
      key.isDeleted = true;
      await key.save();
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
      const users = await userService.getAllFromVW(vw);
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

  async addEmotes(req, res, next) {
    try {
      const { vw } = req;
      const { uuids } = req.body;
      const resp = await Promise.allSettled(
        uuids.map(async (uuid) => {
          try {
            await storeService.getEmote(uuid);
            await vwService.createEmote(vw, uuid);
          } catch (e) {
            const cause =
              e.response?.statusText === "Not Found"
                ? "Emote does not exist"
                : e.original.detail.includes("already exists")
                  ? "Emote already associated"
                  : "Unknown error";
            throw new Error(uuid, { cause });
          }
        }),
      );
      const failedUuids = resp
        .filter((r) => r.status === "rejected")
        .reduce(
          (acc, f) => ({
            ...acc,
            [f.reason.message]: f.reason.cause,
          }),
          {},
        );
      const errorLength = Object.keys(failedUuids).length;
      const status = !errorLength ? "success" : "error";
      const statusMap = {
        success: OK,
        error: FORBIDDEN,
      };
      res.status(statusMap[status]).send({
        status,
        data: { failed: failedUuids },
      });
    } catch (e) {
      logger.error(e.message, e);
      return next(
        new HttpError(null, {}, INTERNAL_SERVER_ERROR, "An error occured"),
      );
    }
  }

  async removeEmotes(req, res, next) {
    try {
      const { vw } = req;
      const { uuids } = req.body;
      const resp = await Promise.allSettled(
        uuids.map(async (uuid) => {
          try {
            await vwService.hasEmote(vw, uuid);
            const [emote] = await vw.getEmotes({ where: { emoteUuid: uuid } });
            await emote.destroy();
          } catch (e) {
            const cause =
              e.response?.statusText === "Not Found"
                ? "Emote does not exist"
                : e.original.detail.includes("already exists")
                  ? "Emote already associated"
                  : "Unknown error";
            throw new Error(uuid, { cause });
          }
        }),
      );
      const failedUuids = resp
        .filter((r) => r.status === "rejected")
        .reduce(
          (acc, f) => ({
            ...acc,
            [f.reason.message]: f.reason.cause,
          }),
          {},
        );
      const errorLength = Object.keys(failedUuids).length;
      const status = !errorLength ? "success" : "error";
      const statusMap = {
        success: OK,
        error: FORBIDDEN,
      };
      res.status(statusMap[status]).send({
        status,
        data: { failed: failedUuids },
      });
    } catch (e) {
      logger.error(e.message, e);
      return next(
        new HttpError(null, {}, INTERNAL_SERVER_ERROR, "An error occured"),
      );
    }
  }

  async getEmotes(req, res, next) {
    try {
      const { vw } = req;
      const { mature, categories } = req.query;

      if (USE_WHITELIST) {
        const emotes = await vw.getEmotes({ raw: true });
        const emotesData = await storeService.getEmotes(emotes, vw, {
          mature,
          categories,
        });
        return res.send(emotesData);
      }

      const emotes = await storeService.getEmoteGallery(vw);
      res.send(emotes);
    } catch {
      return next(
        new HttpError(null, {}, INTERNAL_SERVER_ERROR, "An error occured"),
      );
    }
  }
}

export default new Controller();
