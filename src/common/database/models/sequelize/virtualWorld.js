import Sequelize from "sequelize";
import sequelize from "../../sequelize.js";

const { Model, DataTypes } = Sequelize;

class VirtualWorld extends Model {
  static associate(models) {
    VirtualWorld.belongsToMany(models.User, {
      as: "users",
      through: models.VirtualWorldUser,
    });
    VirtualWorld.hasMany(models.VirtualWorldEmote, {
      as: "emotes",
      onDelete: "CASCADE",
    });
    VirtualWorld.hasMany(models.Key, { as: "keys", onDelete: "CASCADE" });
    VirtualWorld.hasOne(models.Plan, {
      as: "plan",
      sourceKey: "planId",
      foreignKey: "id",
    });
    VirtualWorld.hasMany(models.Usage, { as: "usages" });
    VirtualWorld.hasMany(models.VirtualWorldAlias, {
      as: "alias",
      onDelete: "CASCADE",
    });
    VirtualWorld.hasMany(models.VirtualWorldToken, {
      as: "tokens",
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
      defaultValue: Sequelize.literal("public.uuid_generate_v4()"),
    },
    cognitoUuid: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: Sequelize.literal("public.uuid_generate_v4()"),
      field: "cognito_uuid",
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    planId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: "plan_id",
    },
    configuration: {
      type: DataTypes.JSON,
      allowNull: true,
      field: "configuration",
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
      allowNull: true,
      field: "created_at",
    },
  },
  {
    indexes: [],
    sequelize,
    modelName: "virtual_worlds",
    timestamps: false,
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
