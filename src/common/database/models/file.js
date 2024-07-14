import Sequelize from "sequelize";
import { sequelize } from "../sequelize.js";

const { Model, DataTypes } = Sequelize;

class File extends Model {
  static associate(models) {
    File.belongsTo(models.Asset, {
      as: "asset",
    });
  }
}

File.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    extension: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    assetId: {
      field: "asset_id",
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    url: DataTypes.VIRTUAL,
  },
  {
    indexes: [],
    sequelize,
    modelName: "file",
    paranoid: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  },
);

export default File;
