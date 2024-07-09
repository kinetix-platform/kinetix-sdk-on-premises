import Sequelize from "sequelize";
import sequelize from "../sequelize.js";

const { Model, DataTypes } = Sequelize;

class VirtualWorldEmote extends Model {
  static associate(models) {
    VirtualWorldEmote.belongsTo(models.VirtualWorld, { onDelete: "CASCADE" });
  }
}

VirtualWorldEmote.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    emoteUuid: {
      type: DataTypes.UUID,
      field: "emote_uuid",
      allowNull: false,
    },
    virtualWorldId: {
      type: DataTypes.INTEGER,
      field: "vw_id",
      allowNull: false,
    },
  },
  {
    indexes: [],
    sequelize,
    modelName: "virtual_worlds_emotes",
  },
);

export default VirtualWorldEmote;
