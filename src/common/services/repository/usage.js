import UsageModel from "#common/database/models/usage.js";
import CrudService from "./crud.js";

export class UsageService extends CrudService {
  constructor() {
    super("usages", UsageModel);
  }
}

export default new UsageService();
