import Sequelize from "sequelize";
import { sequelize } from "../sequelize.js";

const { Model, DataTypes } = Sequelize;

class Process extends Model {
  static associate(models) {
    Process.belongsTo(models.User, {
      as: "user",
    });
    Process.belongsTo(models.VirtualWorld, {
      as: "virtualWorld",
    });
    Process.belongsTo(models.Key, {
      as: "key",
    });
  }
}

Process.init(
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
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id",
    },
    virtualWorldId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "vw_id",
    },
    keyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "key_id",
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    step: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    mlEndedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "ml_ended_at",
    },
    mlStartedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "ml_started_at",
    },
    mlReturnCode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "ml_return_code",
    },
    postMLError: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false,
      field: "post_ml_error",
    },
    maturity: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false,
    },
    validated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false,
    },
    rejected: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false,
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "parent_id",
    },
  },
  {
    indexes: [],
    sequelize,
    modelName: "process",
  },
);

export default Process;

/*
  emote: {
    type: String,
    index: {
      global: true,
      name: "emote-createdAt-index",
      project: true,
      rangeKey: "createdAt",
    },
  },
  animation: String,
  video: String,
  */
