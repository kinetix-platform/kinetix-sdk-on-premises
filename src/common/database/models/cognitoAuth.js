import Sequelize from "sequelize";
import sequelize from "../sequelize.js";

const { Model, DataTypes } = Sequelize;

class CognitoAuth extends Model {}

CognitoAuth.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cognitoUuid: {
      type: DataTypes.UUID,
      field: "cognito_uuid",
      allowNull: false,
    },
    firstConnection: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "first_connection",
    },
    lastConnection: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "last_connection",
    },
  },
  {
    indexes: [],
    sequelize,
    modelName: "cognito_auth",
    tableName: "cognito_auth",
    timestamps: false,
  },
);

export default CognitoAuth;
