import crypto from "crypto";
import CrudService from "./crud.js";
import VirtualWorld from "#common/database/models/sequelize/virtualWorld.js";
import Key from "#common/database/models/sequelize/key.js";
import User from "#common/database/models/sequelize/user.js";
import VirtualWorldEmoteModel from "#common/database/models/sequelize/virtualWorldEmote.js";
import Plan from "#common/database/models/sequelize/plan.js";
import VirtualWorldUser from "#common/database/models/sequelize/virtualWorldUser.js";

const { USE_WHITELIST } = process.env;

export class VirtualWorldService extends CrudService {
  constructor() {
    super("virtual_world", VirtualWorld);
  }

  async getAll(where, fields = ["*"], options = {}) {
    return this.model.findAll({
      where,
      attributes: {
        include: fields,
      },
      include: [
        {
          model: Plan,
          as: "plan",
          attributes: ["name", "mugeLimit", "totalUsersLimit", "callsLimit"],
        },
      ],
      ...options,
    });
  }

  async getAndCountAll(where, fields = ["*"], options = {}) {
    return this.model.findAndCountAll({
      where,
      attributes: {
        include: fields,
      },
      include: [
        {
          model: Plan,
          as: "plan",
          attributes: ["name", "mugeLimit", "totalUsersLimit", "callsLimit"],
        },
      ],
      ...options,
    });
  }

  async createEmote(vw, emoteUuid) {
    const hasEmote = await this.hasEmote(vw, emoteUuid);
    if (hasEmote) return;
    return vw.createEmote({
      emoteUuid,
    });
  }

  async createKey(vw, canRead, canWrite, expire) {
    const newKey = crypto.randomBytes(16).toString("hex");
    return vw.createKey({
      canRead,
      canWrite,
      expire,
      value: newKey,
    });
  }

  async createUser(vw, virtualWorldId) {
    const user = await User.create({
      virtualWorldId,
    });
    try {
      await VirtualWorldUser.create({
        userId: user.id,
        externalId: virtualWorldId,
        virtualWorldId: vw.id,
      });
    } catch {
      await user.destroy();
      return null;
    }

    return user;
  }

  async hasUser(virtualWorld, vwUserId) {
    const users = await User.findAll({
      where: {
        virtualWorldId: vwUserId,
      },
      include: {
        model: VirtualWorld,
        as: "virtualWorlds",
        where: {
          id: virtualWorld.id,
        },
      },
    });
    return users.length ? users[0] : false;
  }

  async hasEmote(virtualWorld, uuid) {
    if (!USE_WHITELIST) {
      return true;
    }
    const hasEmote = await VirtualWorldEmoteModel.findOne({
      where: {
        vw_id: virtualWorld.id,
        emoteUuid: uuid,
      },
    });
    return !!hasEmote;
  }

  async getByKey(value) {
    return this.model.findOne({
      include: {
        model: Key,
        as: "keys",
        attributes: ["expire", "canRead", "canWrite"],
        where: {
          value,
        },
      },
    });
  }
}

export default new VirtualWorldService();
