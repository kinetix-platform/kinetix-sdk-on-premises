import { v4 as uuidv4 } from "uuid";
import httpStatus from "http-status";
import logger from "#common/services/logger.js";
import HttpError from "../../common/helpers/error.js";
import kinetixService from "#common/services/kinetix.js";
import awsService from "#common/services/aws.js";
import vwService from "#common/services/repository/virtualWorld.js";
import processService from "#common/services/repository/process.js";
import cacheService from "#common/services/cache.js";
import userService from "#common/services/repository/user.js";
import processHelper from "../helpers/process.js";
import tokenService from "#common/services/repository/token.js";

const { FORBIDDEN, INTERNAL_SERVER_ERROR, NOT_FOUND, BAD_REQUEST } = httpStatus;
const { VWC_URL, S3_BUCKET, UGE_TOKEN_EXPIRE = 300 } = process.env;

const generateErrorMessage = (p) => {
  if (p?.mlReturnCode === 5) return "Too much characters detected in the video";
  if (p?.mlReturnCode === 6) return "No character detected in the video";
  if (p?.mlReturnCode === 7) return "Character too small in the video";
};

const enrichProcess = async (process) => {
  let ml;
  let thumbnailUrl;
  const errorMessage = generateErrorMessage(process);

  if (process.video && process.step !== "transcode_failed") {
    const asset = await kinetixService.getAsset(process.video);
    thumbnailUrl = asset?.data?.files?.find((f) => f.name === "thumbnail")?.url;
  }

  return {
    ...process,
    ...(ml && { ml }),
    ...(errorMessage && { errorMessage }),
    ...(thumbnailUrl && { thumbnailUrl }),
  };
};

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

  async getAllByCognito(req, res, next) {
    try {
      const { user } = req;
      const processes = await processService.getProcessesByCognito(user.sub);
      const enrichProcesses = await Promise.all(
        processes.toJSON().map((p) => enrichProcess(p)),
      );
      return res.send(enrichProcesses);
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
      const { body, vw, user, files, parentProcess, keyId } = req;

      const uuid = uuidv4();
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

      let video;
      let videoAsset;
      let extension;
      let name;

      if (videoUuid) {
        try {
          const { data } = await kinetixService.getAsset(videoUuid);
          videoAsset = data;
          if (videoAsset.type !== "video") {
            return next(
              new HttpError(null, {}, BAD_REQUEST, "uuid is not an video uuid"),
            );
          }
          extension =
            videoAsset.files.find((f) => f.name === "original")?.extension ||
            "mp4";
          name = body.name || videoAsset.name;
        } catch (error) {
          logger.error(error.message, error);
          return next(
            new HttpError(
              null,
              {},
              NOT_FOUND,
              `Cant find video uuid ${videoUuid}`,
            ),
          );
        }
      } else if (files && files.length > 0) {
        video = files[0];
        extension = video.originalname.split(".").pop();
        name = body.name || video.originalname;

        const videoFiles = [
          {
            name: "original",
            extension,
          },
          {
            name: "prepared",
            extension: "mp4",
          },
        ];

        // CREATION THROUGH TRY UGC/UGE FEATUE
        if (user && user.sub) {
          videoFiles.push({ name: "thumbnail", extension: "jpg" });
        }

        videoAsset = await kinetixService.createAsset({
          name,
          type: "video",
          files: videoFiles,
          ...(user && user.sub && { cognitoUuid: user.sub }),
        });
      } else {
        name = body.name || text;
      }

      const animation = await kinetixService.createAsset({
        name,
        type: "animation",
        metadata: {
          maturity: mature,
        },
        ...(user && user.sub && { cognitoUuid: user.sub }),
      });

      const emote = await kinetixService.createAsset({
        name,
        type: "emote",
        metadata: {
          maturity: mature,
        },
        ...(user && user.sub && { cognitoUuid: user.sub }),
      });

      const npData = {
        uuid,
        name,
        animation: animation.uuid,
        emote: emote.uuid,
        ...(user && user.sub ? { cognito: user.sub } : { user: user.id }), // IF TRY UGC/UGE FEATURE
        ...(text ? { text } : { video: videoAsset.uuid }), // SUPPORT FOR VIDEO OR TEXT
        ...(vw && { vw: vw.id }), // IF COGNITO THERE IS NO VW
        step: "initialized",
        maturity: mature,
        validated: false,
        rejected: false,
        ...(keyId && { key: parseInt(keyId) }),
      };

      if (parentProcess) {
        npData.parent = parentProcess;
      }

      const newProcess = await processService.createProcess(npData);

      res.status(201).send(newProcess);
      if (req.token) {
        const token = await tokenService.getBy({ value: req.token });
        token.processUuid = newProcess.uuid;
        await token.save();
        await cacheService.del(`sdk-token-${req.token}`);
        logger.info("deleting sdk token after process creation");
      }

      const originalPath = videoAsset
        ? `user-data/${videoAsset.uuid}-original.${extension}`
        : "";
      const preparedPath = videoAsset
        ? `user-data/${videoAsset.uuid}-prepared.mp4`
        : "";
      const animationPath = `user-data/${animation.uuid}-animation.json`;
      console.log(animationPath);
      if (!text) {
        try {
          logger.info(`running transcode ${uuid}`);
          await awsService.transcodeVideo({
            originalPath,
            preparedPath,
            video,
            ...(user &&
              user.sub && {
                thumbnail: `user-data/${videoAsset.uuid}-thumbnail.jpg`,
              }),
            options: {
              start,
              end,
            },
          });
          logger.info(`transcode done ${uuid}`);
          newProcess.step = "transcode_done";
          await newProcess.save();
        } catch (e) {
          logger.error(`transcoding failed ${e.message}`);
          newProcess.step = "transcode_failed";
          return newProcess.save();
        }
      }

      newProcess.step = "requesting_ml";
      await newProcess.save();

      try {
        // TO DO CREATE PROCESS
      } catch {
        newProcess.step = "ml_request_failed";
        await newProcess.save();
      }

      newProcess.step = "waiting_scheduler";
      await newProcess.save();
    } catch (e) {
      logger.error(`process creation error ${e.message}`, e);
      return next(
        new HttpError(null, e, INTERNAL_SERVER_ERROR, "An error occured"),
      );
    }
  }

  async videoInfo(req, res, next) {
    try {
      const { vw } = req;
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

      const { formats, thumbnails, automatic_captions, ...info } =
        await awsService.lambdaYoutube({ url: req.body.url });

      return res.send(info);
    } catch (e) {
      if (e instanceof HttpError) {
        return next(e);
      } else {
        logger.error(e.message, e);
        return next(
          new HttpError(null, e, INTERNAL_SERVER_ERROR, "An error occured"),
        );
      }
    }
  }

  async videoDownload(req, res, next) {
    try {
      const { vw } = req;
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

      const videoAsset = await kinetixService.createAsset({
        name: req.body.url,
        type: "video",
        files: [
          {
            name: "original",
            extension: "mp4",
          },
          {
            name: "prepared",
            extension: "mp4",
          },
        ],
      });

      // CREATE ASSET VIDEO
      await awsService.lambdaYoutube({
        url: req.body.url,
        outputPath: `s3://${S3_BUCKET}/user-data/${videoAsset.uuid}-original.mp4`,
      });

      return res.send(videoAsset);
    } catch (e) {
      if (e instanceof HttpError) {
        return next(e);
      } else {
        logger.error(e.message, e);
        return next(
          new HttpError(null, e, INTERNAL_SERVER_ERROR, "An error occured"),
        );
      }
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
    } catch (e) {
      console.log(e);
      return next(
        new HttpError(null, {}, INTERNAL_SERVER_ERROR, "An error occured."),
      );
    }
  }
}

export default new Controller();
