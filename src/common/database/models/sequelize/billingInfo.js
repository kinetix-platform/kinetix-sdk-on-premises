import Sequelize from 'sequelize';
import sequelize from '../../sequelize.js';

const { Model, DataTypes } = Sequelize;

class BillingInfo extends Model {}

BillingInfo.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  companyName: {
    type: DataTypes.STRING,
    field: 'company_name',
    allowNull: false,
  },
  companyRegistrationNumber: {
    type: DataTypes.STRING,
    field: 'company_registration_number',
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    field: 'first_name',
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    field: 'last_name',
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  accountingEmail: {
    type: DataTypes.STRING,
    field: 'accounting_email',
    allowNull: true,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    field: 'phone_number',
    allowNull: false,
  },
  address: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  invoiceAddress: {
    type: DataTypes.JSONB,
    field: 'invoice_address',
    allowNull: false,
  },
  others: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cognitoUuid: {
    type: DataTypes.UUID,
    field: 'cognito_uuid',
    allowNull: false,
    unique: true,
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
  modelName: 'billing_infos',
  timestamps: false,
});


export default BillingInfo;
