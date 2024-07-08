import Sequelize from 'sequelize';
import sequelize from '../../sequelize.js';

const { Model, DataTypes } = Sequelize;

class VirtualWorldToken extends Model {
  static associate(models) {
    VirtualWorldToken.belongsTo(models.VirtualWorld, { onDelete: 'CASCADE' });
    VirtualWorldToken.belongsTo(models.User, { onDelete: 'CASCADE' });
  }
}

VirtualWorldToken.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  virtualWorldId: {
    type: DataTypes.INTEGER,
    field: 'vw_id',
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    field: 'user_id',
    allowNull: false,
  },
  value: {
    type: DataTypes.UUID,
    field: 'value',
    allowNull: false,
  },
  processUuid: {
    type: DataTypes.UUID,
    field: 'process_uuid',
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: true,
    field: 'created_at',
  },
}, {
  indexes: [],
  sequelize,
  modelName: 'virtual_worlds_tokens',
  timestamps: false,
});

export default VirtualWorldToken;
