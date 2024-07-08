import Sequelize, { Op } from "sequelize";
import CrudService from "./crud.js";
import VirtualWorldAliasModel from "#common/database/models/sequelize/virtualWorldAlias.js";

export class AliasService extends CrudService {
  constructor() {
    super("virtual_world_alias", VirtualWorldAliasModel);
  }

  async removeEmote(id, uuid) {
    await VirtualWorldAliasModel.update(
      { emotes: Sequelize.fn("array_remove", Sequelize.col("emotes"), uuid) },
      { where: { id } },
    );
  }

  async getAllByEmote(emoteUuid) {
    return this.model.findAll({
      where: {
        emotes: { [Op.contains]: [emoteUuid] },
      },
    });
  }
}

export default new AliasService();
