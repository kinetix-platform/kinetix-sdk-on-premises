import Sequelize from "sequelize";
import sequelize from "../sequelize.js";

const { Model, DataTypes } = Sequelize;

class Process extends Model {
  static associate(models) {
    Process.belongsTo(models.User, { as: "user" });
    Process.belongsTo(models.VirtualWorld, { as: "virtualWorld" });
    Process.belongsTo(models.Key, { as: "key" });
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
      defaultValue: Sequelize.literal("public.uuid_generate_v4()"),
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
      field: "name",
    },
    step: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: "step",
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
      field: "maturity",
    },
    validated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false,
      field: "validated",
    },
    rejected: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false,
      field: "rejected",
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "parent_id",
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
      field: "created_at",
    },
    endedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "ended_at",
    },
    lastUpdateAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
      field: "last_update_at",
    },
  },
  {
    indexes: [],
    sequelize,
    modelName: "processes",
    timestamps: false,
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
