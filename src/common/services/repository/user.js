import UserModel from "#common/database/models/user.js";
import UserEmoteModel from "#common/database/models/userEmote.js";
import CrudService from "./crud.js";
import Sequelize from "sequelize";
import VWModel from "#common/database/models/virtualWorld.js";
import { Op } from "sequelize";

export class UsersService extends CrudService {
  constructor() {
    super("users", UserModel);
  }

  async getAllFromVW(vw) {
    const response = await this.model.findAll({
      attributes: {
        include: [
          [Sequelize.fn("COUNT", Sequelize.col("emotes.id")), "emotesCount"],
          "*",
        ],
      },
      include: [
        {
          model: VWModel,
          as: "virtualWorld",
          attributes: [],
          required: true,
        },
        {
          model: UserEmoteModel,
          as: "emotes",
          required: false,
          attributes: [],
        },
      ],
      group: ["users.id", "virtualWorlds->virtual_worlds_users.id"],
      order: [
        ["emotesCount", "DESC"],
        ["created_at", "DESC"],
      ],
    });

    return response.map((u) => ({
      ...u.dataValues,
      emotesCount: parseInt(u.dataValues.emotesCount),
    }));
  }

  /**
   * List user associated emotes
   * @param user
   * @param since createdAt filter
   * @param until createdAt filter
   * @param limit pagination param
   * @param offset pagination param
   * @param order sequelize order param
   * @returns {Promise<Emote[]>}
   */
  async getEmotes(
    user,
    { since, until, limit, offset, order, uuids, raw = true },
  ) {
    const params = {
      where: {
        userId: user.id,
      },
      order,
      raw,
    };
    if (since || until) {
      params.where.createdAt = {};
    }
    if (since) {
      params.where.createdAt[Op.gte] = since;
    }
    if (until) {
      params.where.createdAt[Op.lte] = until;
    }
    if (limit) {
      params.limit = limit;
    }
    if (offset) {
      params.offset = offset;
    }
    if (uuids) {
      params.where.emoteUuid = {
        [Op.in]: uuids,
      };
    }
    return UserEmoteModel.findAll(params);
  }

  async hasEmote(user, emoteUuid) {
    return UserEmoteModel.findOne({
      where: {
        userId: user.id,
        emoteUuid,
      },
    });
  }

  async createEmote(user, emoteUuid) {
    const hasEmote = await this.hasEmote(user, emoteUuid);
    if (hasEmote) return;
    return user.createEmote({
      emoteUuid,
    });
  }

  async removeEmote(user, emoteUuid, reason = "") {
    const emote = await this.hasEmote(user, emoteUuid);
    if (emote) {
      emote.deletionReason = reason;
      emote.validatedAt = null;
      emote.validatedBy = null;
      emote.changed("validatedAt", true);
      await emote.save();
      await emote.destroy();
    }
  }

  async rankEmote(user, emoteUuid, rank) {
    const emote = await this.hasEmote(user, emoteUuid);
    if (emote) {
      emote.moderation = emote.moderation
        ? { ...emote.moderation, rank }
        : { rank };
      await emote.save();
    }
    return emote;
  }

  async validateEmote(user, emoteUuid) {
    const emote = await this.hasEmote(user, emoteUuid);
    if (emote) {
      emote.deletionReason = null;
      emote.validatedAt = new Date();
      emote.validatedBy = "You";
      emote.changed("validatedAt", true);
      emote.moderation = emote.moderation
        ? { ...emote.moderation, validated: true }
        : { validated: true };
      await emote.save();
    }
  }
}

export default new UsersService();
