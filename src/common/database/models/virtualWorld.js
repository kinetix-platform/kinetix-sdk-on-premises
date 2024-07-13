import Sequelize from "sequelize";
import { sequelize } from "../sequelize.js";

const { Model, DataTypes } = Sequelize;

class VirtualWorld extends Model {
  static associate(models) {
    VirtualWorld.belongsToMany(models.User, {
      as: "users",
      through: models.VirtualWorldUser,
    });
    VirtualWorld.hasMany(models.Key, { as: "keys", onDelete: "CASCADE" });
    VirtualWorld.hasMany(models.Usage, { as: "usages" });
    VirtualWorld.hasMany(models.VirtualWorldToken, {
      as: "tokens",
      onDelete: "CASCADE",
    });
    VirtualWorld.hasMany(models.Process, {
      as: "processes",
      onDelete: "CASCADE",
    });
  }
}

VirtualWorld.init(
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
    cognitoUuid: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
      field: "cognito_uuid",
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    configuration: {
      type: DataTypes.JSON,
      allowNull: true,
      field: "configuration",
    },
  },
  {
    indexes: [],
    sequelize,
    modelName: "virtual_worlds",
  },
);

VirtualWorld.prototype.toJSON = function (hideKeys = true) {
  const newObject = Object.assign({}, this.get());

  if (hideKeys) {
    delete newObject.id;
    delete newObject.cognitoUuid;
  }
  return newObject;
};

export default VirtualWorld;
