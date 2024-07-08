import TokenModel from '#common/database/models/sequelize/virtualWorldToken.js';
import CrudService from './crud.js';

export class TokenService extends CrudService {
  constructor() {
    super('virtual_worlds_tokens', TokenModel);
  }
}

export default new TokenService();