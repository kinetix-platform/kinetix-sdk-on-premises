import Sequelize from 'sequelize';
import sequelize from '../../sequelize.js';

const { Model, DataTypes } = Sequelize;

class Plan extends Model {
  static associate(models) {
    Plan.hasMany(models.VirtualWorld, { as: 'virtualWorlds' });
    Plan.hasMany(models.Usage, { as: 'usages' });
  }
}

Plan.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  uuid: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  totalUsersLimit: {
    type: DataTypes.INTEGER,
    field: 'mu_limit',
    allowNull: true,
  },
  mugeLimit: {
    type: DataTypes.INTEGER,
    field: 'muge_limit',
    allowNull: true,
  },
  callsLimit: {
    type: DataTypes.INTEGER,
    field: 'calls_limit',
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
  modelName: 'plans',
  timestamps: false,
});

export default Plan;
