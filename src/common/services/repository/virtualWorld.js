import crypto from "crypto";
import CrudService from "./crud.js";
import VirtualWorld from "#common/database/models/virtualWorld.js";
import Key from "#common/database/models/key.js";
import User from "#common/database/models/user.js";

export class VirtualWorldService extends CrudService {
  constructor() {
    super("virtual_world", VirtualWorld);
  }

  async create(data) {
    const vw = await VirtualWorld.create(data);
    return vw;
  }

  async findOrCreate(data) {
    const [vw] = await VirtualWorld.findOrCreate({
      where: { uuid: data.uuid },
      defaults: data,
    });
    vw.isNewRecord = vw._options.isNewRecord;
    return vw;
  }

  async getAll(where, fields = ["*"], options = {}) {
    return VirtualWorld.findAll({
      where,
      attributes: {
        include: fields,
      },
      include: [],
      ...options,
    });
  }

  async getAndCountAll(where, fields = ["*"], options = {}) {
    return VirtualWorld.findAndCountAll({
      where,
      attributes: {
        include: fields,
      },
      include: [],
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
    return vw.createUser({
      externalId: virtualWorldId,
    });
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

  async getByKey(value) {
    return VirtualWorld.findOne({
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
