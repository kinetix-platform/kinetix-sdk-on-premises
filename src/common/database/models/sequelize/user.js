import Sequelize from 'sequelize';
import sequelize from '../../sequelize.js';

const { Model, DataTypes } = Sequelize;

class User extends Model {
  static associate(models) {
    User.belongsToMany(models.VirtualWorld, { as: 'virtualWorlds', through: models.VirtualWorldUser });
    User.hasMany(models.UserEmote, { as: 'emotes', onDelete: 'CASCADE' });
    User.hasMany(models.UserActivity, { as: 'activity', onDelete: 'CASCADE' });
  }
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  virtualWorldId: {
    type: DataTypes.STRING(255),
    allowNull: false,
    field: 'vw_id',
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
  modelName: 'users',
  timestamps: false,
});

export default User;
