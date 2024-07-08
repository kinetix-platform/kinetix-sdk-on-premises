import CognitoAuth from '#common/database/models/sequelize/cognitoAuth.js';
import CrudService from './crud.js';

export class CognitosService extends CrudService {
  constructor() {
    super('cognito_auth', CognitoAuth);
  }
  
  async createOrUpdate(cognitoUuid) {
    let auth = await this.getBy({ cognitoUuid });
    if (auth) {
      auth.lastConnection = new Date();
    } else {
      auth = new CognitoAuth({
        cognitoUuid,
        firstConnection: new Date(),
        lastConnection: new Date()
      });
    }
    
    await auth.save();
  }
}

export default new CognitosService();
