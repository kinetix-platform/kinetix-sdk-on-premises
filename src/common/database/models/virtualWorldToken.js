import Sequelize from "sequelize";
import { sequelize } from "../sequelize.js";

const { Model, DataTypes } = Sequelize;

class VirtualWorldToken extends Model {
  static associate(models) {
    VirtualWorldToken.belongsTo(models.VirtualWorld, { 
      as: 'virtualWorld' 
    });
    VirtualWorldToken.belongsTo(models.User, { 
      as: 'user' 
    });
    VirtualWorldToken.hasOne(models.Process, { 
      as: 'process' 
    });
  }
}

VirtualWorldToken.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    virtualWorldId: {
      type: DataTypes.INTEGER,
      field: "vw_id",
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      field: "user_id",
      allowNull: false,
    },
    value: {
      type: DataTypes.UUID,
      field: "value",
      allowNull: false,
    },
    processUuid: {
      type: DataTypes.UUID,
      field: "process_uuid",
      allowNull: true,
    },
  },
  {
    indexes: [],
    sequelize,
    modelName: "token",
    paranoid: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  },
);

export default VirtualWorldToken;
