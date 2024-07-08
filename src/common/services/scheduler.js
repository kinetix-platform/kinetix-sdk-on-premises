import axios from 'axios';
import crypto from 'crypto';
import logger from './logger.js';

const { KINETIX_BACKEND, HMAC_SECRET } = process.env;

const sign = ({ url, body, method }) => {
    const hmac = crypto.createHmac('sha512', HMAC_SECRET);
    const bodyString = body && Object.keys(body).length > 0 ? JSON.stringify(body) : '';
    hmac.write(`${method}|${url}${bodyString}`, 'utf8');
    hmac.end();
    const sig = hmac.read();
    return sig.toString('base64');
  };

class Scheduler {
  constructor() {
    this.axios = axios.create({ baseURL: KINETIX_BACKEND.replace('api', 'scheduler') });
    this.axios.interceptors.request.use(
      (config) => {
        const url = new URL(`${config.baseURL}${config.url}`);
        if (config.params) {
          Object.entries(config.params).forEach(([key, value]) => {
            url.searchParams.append(key, value);
          });
        }
        const query = {
          url,
          body: config.data,
          method: config.method.toUpperCase(),
        };
        config.headers.Authorization = `hmac signature=${sign(query)}`;
        return config;
      },
      (error) => {
        Promise.reject(error);
      },
    );
  }

  async getProcessInfos(uuid) {
    try {
      const response = await this.axios.get(`/process/${uuid}/infos`);
      return response.data;   
    } catch (error) {
      logger.error(error.message, error);
    } 
  }
}

export default new Scheduler();