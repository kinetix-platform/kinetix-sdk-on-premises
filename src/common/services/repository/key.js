import KeyModel from "#common/database/models/key.js";
import CrudService from "./crud.js";

export class KeysService extends CrudService {
  constructor() {
    super("keys", KeyModel);
  }
}

export default new KeysService();
