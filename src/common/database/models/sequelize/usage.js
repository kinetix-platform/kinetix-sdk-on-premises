import Sequelize from "sequelize";
import sequelize from "../../sequelize.js";

const { Model, DataTypes } = Sequelize;

class Usage extends Model {
  static associate(models) {
    Usage.belongsTo(models.VirtualWorld, {
      as: "virtualWorld",
      onDelete: "CASCADE",
    });
    Usage.belongsTo(models.Plan, { as: "plan", onDelete: "CASCADE" });
  }
}

Usage.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    virtualWorldId: {
      type: DataTypes.BIGINT,
      field: "vw_id",
      allowNull: false,
    },
    keyId: {
      type: DataTypes.BIGINT,
      field: "key_id",
      allowNull: true,
    },
    planId: {
      type: DataTypes.BIGINT,
      field: "plan_id",
      allowNull: false,
    },
    periodStart: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "period_start",
    },
    users: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    uge: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    mae: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    maeu: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    calls: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    lastUsage: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
      field: "last_usage",
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
      field: "created_at",
    },
  },
  {
    indexes: [],
    sequelize,
    modelName: "usages",
    timestamps: false,
  },
);

Usage.prototype.toJSON = function () {
  const newObject = Object.assign({}, this.get());

  delete newObject.id;
  delete newObject.virtualWorldId;
  return newObject;
};

export default Usage;
