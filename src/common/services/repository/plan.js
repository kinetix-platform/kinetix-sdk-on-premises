import PlanModel from "#common/database/models/sequelize/plan.js";
import CrudService from "./crud.js";

export class PlansService extends CrudService {
  constructor() {
    super("plans", PlanModel);
  }
}

export default new PlansService();
