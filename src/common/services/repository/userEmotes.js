import { Op } from "sequelize";
import CrudService from "./crud.js";
import UserEmoteModel from "#common/database/models/userEmote.js";
import UserModel from "#common/database/models/user.js";
import VWModel from "#common/database/models/virtualWorld.js";

export class UserEmotesService extends CrudService {
  constructor() {
    super("users_emotes", UserEmoteModel);
  }

  async getModerationEmotes({
    threshold = 0.6,
    vwUuid,
    limit = 20,
    offset = 0,
  }) {
    const { count, rows } = await this.model.findAndCountAll({
      where: {
        [Op.and]: {
          "moderation.validated": { [Op.not]: true },
          "moderation.minimumDistance": { [Op.lt]: threshold },
          isDeleted: false,
          isUGE: true,
        },
      },
      include: [
        {
          model: UserModel,
          as: "user",
          required: true,
          include: {
            model: VWModel,
            as: "virtualWorlds",
            required: true,
            ...(vwUuid && { where: { uuid: vwUuid } }),
          },
        },
      ],
      limit,
      offset,
      order: [["created_at", "ASC"]],
    });

    const emotes = rows.map((r) => {
      const { user, ...emote } = r.dataValues;
      const { emoteUuid, createdAt, moderation } = emote;
      const [virtualWorld] = user.virtualWorlds.map(
        ({ id, uuid, name, cognitoUuid: owner }) => ({ id, uuid, name, owner }),
      );
      return {
        emoteUuid,
        createdAt,
        user: user.virtualWorldId,
        virtualWorld,
        moderation,
        ...emote,
      };
    });

    return { count, emotes };
  }
}

export default new UserEmotesService();
