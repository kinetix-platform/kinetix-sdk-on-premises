import Sequelize from "sequelize";
import sequelize from "../../sequelize.js";

const { Model, DataTypes } = Sequelize;

class UserEmote extends Model {
  static associate(models) {
    UserEmote.belongsTo(models.User, { as: "user", onDelete: "CASCADE" });
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
    isUGE: {
      type: DataTypes.BOOLEAN,
      field: "is_uge",
      allowNull: false,
      defaultValue: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      field: "is_deleted",
      allowNull: false,
      defaultValue: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
      field: "deleted_at",
      allowNull: true,
    },
    deletedBy: {
      type: DataTypes.STRING,
      field: "deleted_by",
      allowNull: true,
    },
    deletionReason: {
      type: DataTypes.STRING,
      field: "deletion_reason",
      allowNull: true,
    },
    validatedAt: {
      type: DataTypes.DATE,
      field: "validated_at",
      allowNull: true,
    },
    validatedBy: {
      type: DataTypes.STRING,
      field: "validated_by",
      allowNull: true,
    },
    emoteUuid: {
      type: DataTypes.UUID,
      field: "emote_uuid",
      allowNull: false,
    },
    moderation: {
      type: DataTypes.JSONB,
      field: "moderation",
      allowNull: true,
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
    modelName: "users_emotes",
    timestamps: false,
  },
);

export default UserEmote;
