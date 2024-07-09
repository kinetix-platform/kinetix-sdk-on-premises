import Sequelize from "sequelize";
import sequelize from "../sequelize.js";

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
    emoteUuid: {
      type: DataTypes.UUID,
      field: "emote_uuid",
      allowNull: false,
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
    moderation: {
      type: DataTypes.JSONB,
      field: "moderation",
      allowNull: true,
    },
  },
  {
    indexes: [],
    sequelize,
    modelName: "users_emotes",
  },
);

export default UserEmote;
