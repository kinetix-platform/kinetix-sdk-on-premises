import Sequelize from 'sequelize';
import sequelize from '../../sequelize.js';

const { Model, DataTypes } = Sequelize;

class VirtualWorldAlias extends Model {
  static associate(models) {
    VirtualWorldAlias.belongsTo(models.VirtualWorld, { onDelete: 'CASCADE' });
  }
}

VirtualWorldAlias.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  uuid: {
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: Sequelize.literal('public.uuid_generate_v4()'),
  },
  virtualWorldId: {
    type: DataTypes.INTEGER,
    field: 'vw_id',
    allowNull: false,
  },
  name: {
    type: DataTypes.CITEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  categories: {
    type: DataTypes.ARRAY(DataTypes.UUID),
    allowNull: false,
    defaultValue: [],
  },
  mature: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  emotes: {
    type: DataTypes.ARRAY(DataTypes.UUID),
    allowNull: false,
    defaultValue: [],
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'start_date',
  },
  interval: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
    field: 'created_at',
  },
}, {
  indexes: [],
  sequelize,
  modelName: 'virtual_worlds_aliases',
  timestamps: false,
});

VirtualWorldAlias.prototype.toJSON =  function () {
  const newObject = Object.assign({}, this.get());
  delete newObject.id;
  return newObject;
}

export default VirtualWorldAlias;
