import Sequelize from "sequelize";
import { sequelize } from "../sequelize.js";

const { Model, DataTypes } = Sequelize;

class Asset extends Model {
  static associate(models) {
    Asset.belongsTo(models.VirtualWorld, {
      as: "virtualWorld",
    });
    Asset.hasMany(models.File, {
      as: "files",
    });
    Asset.beforeDestroy(async (asset) => {
      await models.File.destroy({ where: { assetId: asset.id } });
    });
  }
}

Asset.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
      unique: true,
    },
    virtualWorldId: {
      type: DataTypes.INTEGER,
      field: "vw_id",
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ["video", "emote"],
    },
    metadata: {
      type: DataTypes.JSON,
    },
  },
  {
    indexes: [],
    sequelize,
    modelName: "asset",
  },
);

export default Asset;
