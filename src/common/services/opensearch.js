import https from 'https';
import axios from 'axios';
import store from './store.js';

const { EMOTIFY_OPENSEARCH_URL } = process.env;

class Opensearch {
  constructor() {
    this.axios = axios.create({ 
      baseURL: EMOTIFY_OPENSEARCH_URL,
      httpsAgent: new https.Agent({
        port: 443,  
        rejectUnauthorized: false
      }),
    });
  }
  
  async search({ q, size }, from) {
    const response = await this.axios.get('/v1/search/query', {
        
        params: {
            q,
            size,
        }
    });
    const uuids = response.data.map((e) => e.id);
    const emotes = await Promise.all(uuids.map((uuid) => store.getEmote(uuid, from)));

    return emotes;
  }
}

export default new Opensearch();