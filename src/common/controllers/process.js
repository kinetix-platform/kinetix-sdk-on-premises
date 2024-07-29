import { v4 as uuidv4 } from "uuid";
import { UGE_TOKEN_EXPIRE } from "#common/config/constants.js";
import httpStatus from "http-status";
import logger from "#common/helpers/logger.js";
import HttpError from "../../common/helpers/error.js";
import kinetixService from "#common/services/kinetix.js";
import vwService from "#common/services/repository/virtualWorld.js";
import processService from "#common/services/repository/process.js";
import cacheService from "#common/services/cache/index.js";
import userService from "#common/services/repository/user.js";
import processHelper from "../helpers/process.js";
import tokenService from "#common/services/repository/token.js";

const { FORBIDDEN, INTERNAL_SERVER_ERROR, NOT_FOUND, BAD_REQUEST } = httpStatus;
const { VWC_URL } = process.env;

class Controller {
  async get(req, res, next) {
    try {
      const { user } = req;
      const { uuid } = req.params;
      const process = await processService.getProcess(uuid);
      if (!process) {
        return next(new HttpError(null, {}, NOT_FOUND, "Process not found"));
      }

      if (user && process.cognito !== user.sub) {
        return next(
          new HttpError(
            null,
            {},
            FORBIDDEN,
            "You are not allowed to access this ressource",
          ),
        );
      }

      const richProcess = await processHelper.buildHierarchy(process);
      res.send(richProcess);
    } catch (e) {
      logger.error(e.message, e);
      return next(
        new HttpError(null, e, INTERNAL_SERVER_ERROR, "An error occured"),
      );
    }
  }

  async delete(req, res, next) {
    try {
      const { user } = req;
      const { uuid } = req.params;
      const process = await processService.getProcess(uuid);
      if (!process) {
        return next(new HttpError(null, {}, NOT_FOUND, "Process not found"));
      }

      if (user && process.cognito !== user.sub) {
        return next(
          new HttpError(
            null,
            {},
            FORBIDDEN,
            "You are not allowed to access this ressource",
          ),
        );
      }

      const ALLOW_STEPS = [
        "render_done",
        "done",
        "transcode_failed",
        "ml_request_failed",
        "render_failed",
        "association_failed",
        "ml_failed",
      ];

      if (!ALLOW_STEPS.includes(process.step)) {
        return next(
          new HttpError(
            null,
            {},
            BAD_REQUEST,
            "You can not interrupt an ongoing process",
          ),
        );
      }

      const deleteAssets = [];
      if (process.animation) {
        deleteAssets.push(kinetixService.deleteAsset(process.animation));
      }

      if (process.emote) {
        deleteAssets.push(kinetixService.deleteAsset(process.emote));
      }

      if (process.video) {
        deleteAssets.push(kinetixService.deleteAsset(process.video));
      }

      try {
        await Promise.allSettled(deleteAssets);
      } catch (err) {
        logger.error(err.message, err);
      }

      const response = await processService.deleteProcess(uuid);

      res.send(response);
    } catch (e) {
      logger.error(e.message, e);
      return next(
        new HttpError(null, e, INTERNAL_SERVER_ERROR, "An error occured"),
      );
    }
  }

  async getToken(req, res, next) {
    try {
      const { uuid } = req.params;
      let ttl;
      const token = await cacheService.get(`sdk-token-${uuid}`);
      try {
        ttl = await cacheService.ttl(`sdk-token-${uuid}`);
      } catch {
        return next(new HttpError(null, {}, NOT_FOUND, "Token not found"));
      }
      if (ttl < 0) {
        return next(new HttpError(null, {}, NOT_FOUND, "Token not found"));
      }
      let expire = new Date();
      expire.setSeconds(expire.getSeconds() + ttl);
      expire = expire.toISOString();
      res.send({
        expireIn: ttl,
        retake: !!token.parent,
        expire,
      });
    } catch (e) {
      logger.error(e.message, e);
      return next(
        new HttpError(null, e, INTERNAL_SERVER_ERROR, "An error occured"),
      );
    }
  }

  async request(req, res, next) {
    try {
      const { vw, query } = req;
      if (!vw.configuration.allowUGC) {
        return next(
          new HttpError(
            null,
            {},
            FORBIDDEN,
            "Virtual world does not allow UGC",
            "noUGC",
          ),
        );
      }
      const { userId } = query;
      const uuid = uuidv4();
      const hasUser = await vwService.hasUser(vw, userId);
      if (!hasUser) {
        return next(new HttpError(null, {}, NOT_FOUND, "User not found"));
      }

      await tokenService.create({
        virtualWorldId: vw.id,
        userId: hasUser.id,
        value: uuid,
      });

      await cacheService.set(
        `sdk-token-${uuid}`,
        { vwId: vw.id, userId, keyId: vw.keyId },
        parseInt(UGE_TOKEN_EXPIRE),
      );
      let expire = new Date();
      expire.setSeconds(expire.getSeconds() + parseInt(UGE_TOKEN_EXPIRE));
      expire = expire.toISOString();
      const url = vw.configuration.ugcFrontentUrl || VWC_URL;
      return res.json({
        uuid,
        expire: expire,
        url: `${url}/?token=${uuid}&expire=${expire}`,
      });
    } catch (e) {
      logger.error(e.message, e);
      return next(
        new HttpError(null, e, INTERNAL_SERVER_ERROR, "An error occured"),
      );
    }
  }

  async create(req, res, next) {
    try {
      const uuid = uuidv4();
      const { body, vw, user, files, parentProcess, keyId } = req;
      console.log(body, vw, user, files, parentProcess, keyId, uuid);

      if (vw && !vw.configuration.allowUGC) {
        return next(
          new HttpError(
            null,
            {},
            FORBIDDEN,
            "Virtual world does not allow UGC",
            "noUGC",
          ),
        );
      }

      const { start, end, mature, videoUuid, text } = body;
      console.log(start, end, mature, videoUuid, text);
    } catch (e) {
      logger.error(`process creation error ${e.message}`, e);
      return next(
        new HttpError(null, e, INTERNAL_SERVER_ERROR, "An error occured"),
      );
    }
  }

  async validate(req, res, next) {
    try {
      const { vw, params } = req;
      const { uuid } = params;
      if (!vw.configuration.ugcValidation) {
        return next(
          new HttpError(
            null,
            {},
            FORBIDDEN,
            "This route is disabled when validation flow is disabled. Check settings.",
          ),
        );
      }
      const process = await processService.getProcess(uuid);
      if (!process) {
        return next(new HttpError(null, {}, NOT_FOUND, "Process not found"));
      }

      if (!process.step.includes("done")) {
        logger.error(
          `Tried to validated unvalidable process ${process.uuid} : ${process.step}`,
        );
        return next(
          new HttpError(
            null,
            {},
            FORBIDDEN,
            "Process is not ready to be validated",
          ),
        );
      }

      process.validated = true;
      process.step = "validated";
      process.rejected = false;
      await process.save();

      await vwService.createEmote(vw, process.emote);
      const user = await userService.getBy({ id: process.user });
      await userService.createEmote(user, process.emote, true);
      await cacheService.delEmotesVWUser(vw.uuid, user.virtualWorldId);
      return res.send(process);
    } catch (e) {
      logger.error(e.message);
      return next(
        new HttpError(null, e, INTERNAL_SERVER_ERROR, "An error occured"),
      );
    }
  }

  async retake(req, res, next) {
    try {
      const { vw, params } = req;
      const { uuid } = params;
      if (!vw.configuration.ugcValidation) {
        return next(
          new HttpError(
            null,
            {},
            FORBIDDEN,
            "This route is disabled when validation flow is disabled. Check settings.",
          ),
        );
      }
      let process = await processService.getProcess(uuid);
      if (!process || process.vw !== vw.id) {
        return next(new HttpError(null, {}, NOT_FOUND, "Process not found"));
      }

      process = await processHelper.buildHierarchy(process, false);

      /*if (process.hierarchy.children > 0) {
        return next(new HttpError(null, {}, NOT_FOUND, 'Process has already been retaken'));
      }*/

      let lastChildProcess = process;
      while (
        lastChildProcess.hierarchy?.child?.uuid ||
        lastChildProcess.child?.uuid
      ) {
        lastChildProcess =
          lastChildProcess.hierarchy?.child || lastChildProcess.child;
      }
      if (lastChildProcess !== process) {
        lastChildProcess = await processService.getProcess(
          lastChildProcess.uuid,
        );
        lastChildProcess = await processHelper.buildHierarchy(
          lastChildProcess,
          false,
        );
      }

      if (
        lastChildProcess.hierarchy.parents >=
        vw.configuration.ugcValidation.maxRetry
      ) {
        return next(
          new HttpError(null, {}, NOT_FOUND, "Process retake limit reached"),
        );
      }

      lastChildProcess.validated = false;
      lastChildProcess.rejected = true;
      lastChildProcess.step = "rejected";
      await lastChildProcess.save();

      const token = uuidv4();
      const user = await userService.get(parseInt(lastChildProcess.user));
      await cacheService.set(
        `sdk-token-${token}`,
        {
          vwId: vw.id,
          userId: user.virtualWorldId,
          parent: lastChildProcess.uuid,
          keyId: vw.keyId,
        },
        parseInt(UGE_TOKEN_EXPIRE),
      );
      let expire = new Date();
      expire.setSeconds(expire.getSeconds() + parseInt(UGE_TOKEN_EXPIRE));
      expire = expire.toISOString();
      const url = vw.configuration.ugcFrontentUrl || VWC_URL;
      return res.json({
        uuid: token,
        expire: expire,
        url: `${url}/?token=${token}&expire=${expire}`,
      });
    } catch (e) {
      logger.error(e.message, e);
      return next(
        new HttpError(null, e, INTERNAL_SERVER_ERROR, "An error occured"),
      );
    }
  }

  async update(req, res, next) {
    try {
      const { params, body, user } = req;
      const { name } = body;

      const process = await processService.getProcess(params.uuid);
      if (!process) {
        return next(new HttpError(null, {}, NOT_FOUND, "Process not found"));
      }

      if (user && process.cognito !== user.sub) {
        return next(
          new HttpError(
            null,
            {},
            FORBIDDEN,
            "You are not allowed to access this ressource",
          ),
        );
      }

      const updatedProcess = await processService.updateProcess(params.uuid, {
        name,
      });

      res.send({
        message: "Process updated successfully",
        data: {
          ...updatedProcess,
        },
      });
    } catch {
      return next(
        new HttpError(null, {}, INTERNAL_SERVER_ERROR, "An error occured."),
      );
    }
  }
}

export default new Controller();
