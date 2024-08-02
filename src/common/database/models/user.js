import Sequelize from "sequelize";
import { sequelize } from "../sequelize.js";

const { Model, DataTypes } = Sequelize;

class User extends Model {
  static associate(models) {
    User.belongsTo(models.VirtualWorld, {
      as: "virtualWorld",
    });
    User.hasMany(models.UserEmote, {
      as: "emotes",
    });
    User.hasMany(models.Process, {
      as: "processes",
    });
  }
}

User.init(
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
      allowNull: false,
      field: "vw_id",
    },
    externalId: {
      type: DataTypes.STRING(255),
      field: "external_id",
      allowNull: false,
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["vw_id", "external_id"],
      },
    ],
    sequelize,
    modelName: "user",
    paranoid: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  },
);

export default User;
