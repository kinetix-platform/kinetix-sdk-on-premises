import Memcached from "memcached-promise";
import {
  CACHE_ENDPOINTS,
  DEFAULT_CACHE_TTL,
} from "#common/config/constants.js";
import logger from "../../helpers/logger.js";

class MemcachedService {
  constructor() {
    this.client = new Memcached(CACHE_ENDPOINTS);
    this.checkConnection()
      .then(() => logger.info("Cache connected"))
      .catch((err) => logger.error("Cache client error", err));
  }

  checkConnection() {
    return this.client.stats();
  }

  async set(key, value, expire = DEFAULT_CACHE_TTL) {
    return this.client.set(
      key,
      typeof value === "string" ? value : JSON.stringify(value),
      expire,
    );
  }

  async get(key) {
    const result = await this.client.get(key);
    if (result) {
      let value;
      try {
        value = JSON.parse(result);
      } catch {
        value = result;
      }
      return value;
    }
    return null;
  }

  async ttl(key) {
    return this.client.ttl(key);
  }

  async del(key) {
    return this.client.del(key);
  }

  async flush() {
    return this.client.flush();
  }

  async scan(key) {
    return this.client.gets(key);
  }
}

export default MemcachedService;
