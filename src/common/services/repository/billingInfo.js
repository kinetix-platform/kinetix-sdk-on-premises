import BillingInfoModel from '#common/database/models/sequelize/billingInfo.js';
import CrudService from './crud.js';

export class BillingService extends CrudService {
  constructor() {
    super('billing_infos', BillingInfoModel);
  }
}

export default new BillingService();
