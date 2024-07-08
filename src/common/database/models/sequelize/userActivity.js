import Sequelize from "sequelize";
import sequelize from "../../sequelize.js";

const { Model, DataTypes } = Sequelize;

class UserActivity extends Model {
  static associate(models) {
    UserActivity.belongsTo(models.User, { as: "user", onDelete: "CASCADE" });
  }
}

UserActivity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id",
    },
    periodStart: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
      field: "period_start",
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
    modelName: "user_activity",
    tableName: "user_activity",
    timestamps: false,
  },
);

export default UserActivity;
