import httpStatus from "http-status";
import HttpError from "../../common/helpers/error.js";
import userService from "#common/services/repository/user.js";
import userEmotesService from "#common/services/repository/userEmotes.js";
import storeService from "#common/services/store.js";
import dynamoService from "#common/services/dynamo.js";
import { setPaginationHeaders } from "#common/services/pagination.js";
import logger from "#common/services/logger.js";
import kinetixService from "#common/services/kinetix.js";
import cacheService from "#common/services/cache.js";

const { INTERNAL_SERVER_ERROR, NOT_FOUND } = httpStatus;

class Controller {
  async listModeration(req, res, next) {
    try {
      const { query, vw } = req;
      const { threshold, limit = 20, offset = 0 } = query;

      const params = {
        threshold,
        limit,
        offset,
        ...(vw && { vwUuid: vw.uuid }),
      };

      const { count, emotes } =
        await userEmotesService.getModerationEmotes(params);
      const emotess = await storeService.getEmotes(emotes);

      const emotesWithVideo = await Promise.all(
        emotess.map(async (e) => {
          const process = await dynamoService.getProcessByEmote(e.emoteUuid);
          const video = await storeService.getAsset(process.video);
          return {
            ...e,
            data: {
              ...e.data,
              defaultVideoUrl: video.files.find((f) => f.name === "prepared")
                .url,
            },
          };
        }),
      );

      setPaginationHeaders(req, res, count, limit, offset);
      res.send(emotesWithVideo);
    } catch (e) {
      logger.error("Error during get moderation emote list", e);
      return next(
        new HttpError(null, {}, INTERNAL_SERVER_ERROR, "An error occured"),
      );
    }
  }

  async rankModeration(req, res, next) {
    try {
      const { params, vw, body } = req;
      const { userId, emoteUuid } = params;
      const { rank } = body;

      const [user] = await vw.getUsers({ where: { virtualWorldId: userId } });
      if (!user) {
        return next(new HttpError(null, {}, NOT_FOUND, "User not found"));
      }
      const emote = await userService.rankEmote(user, emoteUuid, rank);
      await kinetixService.updateAsset({
        uuid: emoteUuid,
        data: { metadata: { moderation: { rank } } },
      });
      await Promise.all([
        cacheService.delEmotesVWUser(vw.uuid, userId),
        cacheService.delEmoteMetadata(vw.uuid, emoteUuid),
      ]);

      return res.send(emote);
    } catch (e) {
      logger.error("Error during get moderation emote list", e);
      return next(
        new HttpError(null, {}, INTERNAL_SERVER_ERROR, "An error occured"),
      );
    }
  }

  async validateModeration(req, res, next) {
    try {
      const { params, vw, user } = req;
      const { userId, emoteUuid } = params;

      const [vwUser] = await vw.getUsers({ where: { virtualWorldId: userId } });
      if (!vwUser) {
        return next(new HttpError(null, {}, NOT_FOUND, "User not found"));
      }

      const hasEmote = await userService.hasEmote(vwUser, emoteUuid);
      if (!hasEmote) {
        return next(
          new HttpError(null, {}, NOT_FOUND, "Emote not attributed to user"),
        );
      }

      await userService.validateEmote(vwUser, emoteUuid, user.isAdmin);
      await kinetixService.updateAsset({
        uuid: emoteUuid,
        data: { metadata: { moderation: { validated: true } } },
      });
      await Promise.all([
        cacheService.delEmotesVWUser(vw.uuid, userId),
        cacheService.delEmoteMetadata(vw.uuid, emoteUuid),
      ]);

      res.send({ status: "success", message: "Emote successfully validated." });
    } catch (e) {
      console.log(e);
      logger.error("Error during addEmote", e);
      return next(
        new HttpError(null, e, INTERNAL_SERVER_ERROR, "An error occured"),
      );
    }
  }
}

export default new Controller();
