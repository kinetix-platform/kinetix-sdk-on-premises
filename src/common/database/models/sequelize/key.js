import Sequelize from "sequelize";
import sequelize from "../../sequelize.js";
import { truncate } from "#common/services/string.js";

const { Model, DataTypes } = Sequelize;

class Key extends Model {
  static associate(models) {
    Key.belongsTo(models.VirtualWorld, {
      as: "virtualWorld",
      onDelete: "CASCADE",
    });
  }
}

Key.init(
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
    value: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    virtualWorldId: {
      type: DataTypes.INTEGER,
      field: "vw_id",
      allowNull: false,
    },
    canRead: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
      field: "can_read",
    },
    canWrite: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
      field: "can_write",
    },
    expire: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: "is_deleted",
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
    modelName: "keys",
    timestamps: false,
  },
);

Key.prototype.toJSON = function (hideKey = true) {
  const newObject = Object.assign({}, this.get());

  delete newObject.id;
  delete newObject.applicationId;
  if (hideKey) newObject.value = truncate(newObject.value);
  return newObject;
};

export default Key;
