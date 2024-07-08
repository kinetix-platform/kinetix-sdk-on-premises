import logger from "#common/services/logger.js";
import userService from "#common/services/repository/user.js";
import HttpError from "../../common/helpers/error.js";
import storeService from "#common/services/store.js";
import httpStatus from "http-status";
import processesServce from "#common/services/dynamo.js";
import cacheService from "#common/services/cache.js";
import { setPaginationHeaders } from "#common/services/pagination.js";
import processHelper from "../helpers/process.js";

const { NOT_FOUND, FORBIDDEN, INTERNAL_SERVER_ERROR, OK, ALREADY_REPORTED } =
  httpStatus;

class Controller {
  async get(req, res) {
    res.send(req.vw);
  }

  async addEmote(req, res, next) {
    try {
      const { params, vw } = req;
      const { userId, emoteUuid } = params;

      const cachedData = await cacheService.getEmotesVWUser(vw.uuid, userId);

      // TO HANDLE MEGAMOD BASTARDS
      if (cachedData) {
        const hasEmote = cachedData.find((e) => e.emoteUuid === emoteUuid);
        if (hasEmote) {
          return next(
            new HttpError(null, {}, OK, "Emote already attributed to user"),
          );
        }
      }

      const [user] = await vw.getUsers({ where: { virtualWorldId: userId } });
      if (!user) {
        return next(new HttpError(null, {}, NOT_FOUND, "User not found"));
      }
      let emote;
      try {
        emote = await storeService.getEmote(emoteUuid, vw);
      } catch {
        return next(new HttpError(null, {}, NOT_FOUND, "Emote not found"));
      }

      const provider = emote.providers.find((p) => p.name === "KinePortal");
      if (!provider) {
        return next(
          new HttpError(
            null,
            {},
            FORBIDDEN,
            "Emote not available on SDK",
            "emoteNotAvailable",
          ),
        );
      }

      const isEmoteAllowed = await userService.isEmoteAllowed(user, emoteUuid);
      if (!isEmoteAllowed) {
        return next(
          new HttpError(
            null,
            {},
            FORBIDDEN,
            "Emote not allowed",
            "emoteNotAllowed",
          ),
        );
      }
      const hasEmote = await userService.hasEmote(user, emoteUuid);
      if (hasEmote) {
        return next(
          new HttpError(null, {}, OK, "Emote already attributed to user"),
        );
      }
      await userService.createEmote(user, emoteUuid);
      await cacheService.delEmotesVWUser(vw.uuid, userId);

      res.send({
        status: "success",
        message: "Emote successfully attributed to user.",
      });
    } catch (e) {
      logger.error("Error during addEmote", e);
      return next(
        new HttpError(null, e, INTERNAL_SERVER_ERROR, "An error occured"),
      );
    }
  }

  async removeEmote(req, res, next) {
    try {
      const { params, vw, user: remover, body } = req;
      const { userId, emoteUuid } = params;
      const { reason } = body;

      const [user] = await vw.getUsers({ where: { virtualWorldId: userId } });
      if (!user) {
        return next(new HttpError(null, {}, NOT_FOUND, "User not found"));
      }

      const hasEmote = await userService.hasEmote(user, emoteUuid);
      if (!hasEmote) {
        return next(
          new HttpError(null, {}, NOT_FOUND, "Emote not attributed to user"),
        );
      }

      await userService.removeEmote(
        user,
        emoteUuid,
        remover?.isAdmin || false,
        reason,
      );
      await Promise.all([
        cacheService.delEmotesVWUser(vw.uuid, userId),
        cacheService.delEmoteMetadata(vw.uuid, emoteUuid),
      ]);

      res.send({
        status: "success",
        message: "Emote successfully removed from user.",
      });
    } catch (e) {
      logger.error("Error during addEmote", e);
      return next(
        new HttpError(null, e, INTERNAL_SERVER_ERROR, "An error occured"),
      );
    }
  }

  async getEmotes(req, res, next) {
    try {
      const { query, params, vw } = req;
      const { userId } = params;
      const { mature, limit = 1000, offset = 0, since, until } = query;

      const cachedData = await cacheService.getEmotesVWUser(vw.uuid, userId);
      if (cachedData && !since && !until) {
        setPaginationHeaders(req, res, cachedData.length, limit, offset);
        res
          .status(ALREADY_REPORTED)
          .send(cachedData.slice(offset, offset + limit));
      } else {
        const [user] = await vw.getUsers({ where: { virtualWorldId: userId } });
        if (!user) {
          return next(new HttpError(null, {}, NOT_FOUND, "User not found."));
        }
        const params = { since, until, order: [["createdAt", "DESC"]] };
        if (since || until) {
          params.limit = limit;
          params.offset = offset;
        }
        const emotes = await userService.getEmotes(user, params);
        const emotesData = await storeService.getEmotes(emotes, vw, { mature });

        setPaginationHeaders(req, res, emotes.length, limit, offset);
        if (!since && !until)
          await cacheService.setEmotesVWUser(vw.uuid, userId, emotesData);

        res.send(emotesData);
      }
    } catch (e) {
      logger.error("Error during getEmotes", e);
      return next(
        new HttpError(null, {}, INTERNAL_SERVER_ERROR, "An error occured."),
      );
    }
  }

  async updateEmote(req, res, next) {
    try {
      const { body, params, vw } = req;
      const { emoteUuid, userId } = params;
      const { name } = body;

      // check user ownership over the emote. Should avoid trolls.
      // find process and rename it as well

      const user = await userService.getBy({ virtualWorldId: userId });
      const userHasEmote = await userService.hasEmote(user, emoteUuid);

      if (!userHasEmote) {
        return next(
          new HttpError(
            null,
            {},
            FORBIDDEN,
            "User does not own the specified emote.",
          ),
        );
      }

      const response = await storeService.updateEmote(emoteUuid, { name }, vw);
      const process = await processesServce.getProcessByEmote(emoteUuid);
      process.name = name;
      await process.save();
      await Promise.all([
        cacheService.delEmotesVWUser(vw.uuid, userId),
        cacheService.delEmoteMetadata(vw.uuid, emoteUuid),
      ]);
      res.send(response);
    } catch (e) {
      logger.error("Error during getEmotes", e);
      return next(
        new HttpError(null, {}, INTERNAL_SERVER_ERROR, "An error occured."),
      );
    }
  }

  /* OLD VERSION */
  async getProcesses(req, res, next) {
    try {
      const { params, vw, query } = req;
      const { userId } = params;
      const { ongoingOnly } = query;
      const [user] = await vw.getUsers({ where: { virtualWorldId: userId } });
      if (!user) {
        return next(new HttpError(null, {}, NOT_FOUND, "User not found."));
      }
      const processes = await processesServce.getProcessesByUser(
        user,
        ongoingOnly,
      );
      const statusMap = {
        pending: [
          "initialized",
          "transcode_done",
          "waiting_scheduler",
          "requesting_ml",
          "waiting_runner",
        ],
        done: ["render_done", "done", "validated", "rejected"],
        failed: [
          "transcode_failed",
          "ml_request_failed",
          "render_failed",
          "association_failed",
        ],
      };
      const getStatus = (process) => {
        if (process.validated) {
          return "validated";
        }
        if (process.rejected) {
          return "rejected";
        }
        return Object.entries(statusMap).reduce((acc, [key, values]) => {
          if (values.includes(process.step)) acc = key;
          return acc;
        }, "processing");
      };
      const response = processes.map(async (p) => {
        return {
          ...p,
          status: getStatus(p),
        };
      });
      res.send(response);
    } catch (e) {
      logger.error("Error during getEmotes", e);
      return next(
        new HttpError(null, {}, INTERNAL_SERVER_ERROR, "An error occured."),
      );
    }
  }

  async getProcessesV2(req, res, next) {
    try {
      const { params, vw, query } = req;
      const { userId } = params;
      const { processing, pending, done, failed, validated, rejected, since } =
        query;
      const [user] = await vw.getUsers({ where: { virtualWorldId: userId } });
      if (!user) {
        return next(new HttpError(null, {}, NOT_FOUND, "User not found."));
      }
      const statusMap = {
        pending: [
          "initialized",
          "transcode_done",
          "waiting_scheduler",
          "requesting_ml",
          "waiting_runner",
        ],
        processing: ["ml_running", "ml_done"],
        done: ["render_done", "done"],
        failed: [
          "transcode_failed",
          "ml_request_failed",
          "render_failed",
          "association_failed",
          "ml_failed",
        ],
        validated: ["validated"],
        rejected: ["rejected"],
      };
      let options = {
        includeSteps: [],
        excludeSteps: [],
      };

      if (since) {
        options.limitDate = since;
      }
      if (typeof pending === "boolean") {
        if (pending) options.includeSteps.push(...statusMap["pending"]);
        else options.excludeSteps.push(...statusMap["pending"]);
      }
      if (typeof done === "boolean") {
        if (done) options.includeSteps.push(...statusMap["done"]);
        else options.excludeSteps.push(...statusMap["done"]);
      }
      if (typeof failed === "boolean") {
        if (failed) options.includeSteps.push(...statusMap["failed"]);
        else options.excludeSteps.push(...statusMap["failed"]);
      }
      if (typeof validated === "boolean") {
        if (validated) options.includeSteps.push(...statusMap["validated"]);
        else options.excludeSteps.push(...statusMap["validated"]);
      }
      if (typeof rejected === "boolean") {
        if (rejected) options.includeSteps.push(...statusMap["rejected"]);
        else options.excludeSteps.push(...statusMap["rejected"]);
      }
      if (typeof processing === "boolean") {
        if (processing) options.includeSteps.push(...statusMap["processing"]);
        else options.excludeSteps.push(...statusMap["processing"]);
      }

      // We want every required status to appear so if there is collision we prioritize includeStep
      options.excludeSteps = options.excludeSteps.reduce(
        (acc, stepToExclude) => {
          if (options.includeSteps.includes(stepToExclude)) return acc;
          acc.push(stepToExclude);
          return acc;
        },
        [],
      );

      const processes = await processesServce.getProcessesByUserV2(
        user,
        options,
      );
      const getStatus = (process) => {
        if (process.validated) {
          return "validated";
        }
        if (process.rejected) {
          return "rejected";
        }
        return Object.entries(statusMap).reduce((acc, [key, values]) => {
          if (values.includes(process.step)) acc = key;
          return acc;
        }, "processing");
      };
      const response = processes.map(async (p) => {
        const processWithML = {
          ...p,
          status: getStatus(p),
        };
        return processHelper.buildHierarchy(processWithML);
      });
      res.send(response);
    } catch (e) {
      logger.error("Error during getEmotes", e);
      return next(
        new HttpError(null, {}, INTERNAL_SERVER_ERROR, "An error occured."),
      );
    }
  }
}

export default new Controller();
