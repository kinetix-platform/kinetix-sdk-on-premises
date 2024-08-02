import Sequelize from "sequelize";
import { sequelize } from "../sequelize.js";

const { Model, DataTypes } = Sequelize;

class UserEmote extends Model {
  static associate(models) {
    UserEmote.belongsTo(models.User, {
      as: "user",
    });
    UserEmote.hasOne(models.Asset, {
      as: "emote",
    });
  }
}

UserEmote.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      field: "user_id",
      allowNull: false,
    },
    emoteId: {
      type: DataTypes.UUID,
      field: "emote_id",
      allowNull: false,
    },
    deletionReason: {
      type: DataTypes.STRING(255),
      field: "deletion_reason",
      allowNull: true,
    },
    validatedAt: {
      type: DataTypes.DATE,
      field: "validated_at",
      allowNull: true,
    },
    validatedBy: {
      type: DataTypes.STRING(255),
      field: "validated_by",
      allowNull: true,
    },
    moderation: {
      type: DataTypes.JSON,
      field: "moderation",
      allowNull: true,
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["user_id", "emote_id"],
      },
    ],
    sequelize,
    modelName: "user_emote",
    paranoid: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  },
);

export default UserEmote;
