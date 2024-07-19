import Sequelize from "sequelize";
import { sequelize } from "../sequelize.js";

const { Model, DataTypes } = Sequelize;

class VirtualWorld extends Model {
  static associate(models) {
    VirtualWorld.hasMany(models.Asset, {
      as: "assets",
    });
    VirtualWorld.hasMany(models.Key, {
      as: "keys",
    });
    VirtualWorld.hasMany(models.User, {
      as: "users",
    });
    VirtualWorld.hasMany(models.VirtualWorldToken, {
      as: "tokens",
    });
    VirtualWorld.hasMany(models.Process, {
      as: "processes",
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
      allowNull: false,
      field: "configuration",
      defaultValue: {},
    },
  },
  {
    indexes: [],
    sequelize,
    modelName: "virtual_world",
    paranoid: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
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
