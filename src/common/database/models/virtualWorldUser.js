import Sequelize from "sequelize";
import { sequelize } from "../sequelize.js";

const { Model, DataTypes } = Sequelize;

class VirtualWorldUser extends Model {}

VirtualWorldUser.init(
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
    virtualWorldId: {
      type: DataTypes.INTEGER,
      field: "vw_id",
      allowNull: false,
    },
    externalId: {
      type: DataTypes.STRING,
      field: "external_id",
      allowNull: false,
    },
  },
  {
    indexes: [],
    sequelize,
    modelName: "virtual_worlds_users",
  },
);

export default VirtualWorldUser;
