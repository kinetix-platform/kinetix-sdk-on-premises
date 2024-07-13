import Sequelize from "sequelize";
import { sequelize } from "../sequelize.js";
import { truncate } from "../../helpers/string.js";

const { Model, DataTypes } = Sequelize;

class Key extends Model {
  static associate(models) {
    Key.belongsTo(models.VirtualWorld, {
      as: "virtualWorld",
      onDelete: "CASCADE",
    });
    Key.hasMany(models.Process, { as: "processes" });
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
      defaultValue: Sequelize.UUIDV4,
      unique: true,
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
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
  },
  {
    indexes: [],
    sequelize,
    modelName: "keys",
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
