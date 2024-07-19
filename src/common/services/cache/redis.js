import Redis from "ioredis";
import {
  CACHE_STORE,
  CACHE_ENDPOINTS,
  DEFAULT_CACHE_TTL,
  DISABLE_CACHE,
  NODE_ENV,
} from "#common/config/constants.js";
import logger from "../../helpers/logger.js";

class CacheService {
  constructor() {
    this.disableCache = DISABLE_CACHE;
    const DEFAULT_REDIS_OPTIONS = { keyPrefix: `${NODE_ENV}:` };

    if (CACHE_ENDPOINTS.length > 1) {
      this.client = new Redis.Cluster(
        CACHE_ENDPOINTS.map((endpoint) => ({
          host: endpoint.split(":")[0],
          port: endpoint.split(":")[1],
        })),
        DEFAULT_REDIS_OPTIONS,
      );
    } else if (CACHE_ENDPOINTS.length === 1) {
      this.client = new Redis(CACHE_ENDPOINTS[0], DEFAULT_REDIS_OPTIONS);
    } else {
      this.disableCache = true;
    }

    if (this.client) {
      this.client.on("connect", () => logger.info("Cache connected"));
      this.client.on("error", (err) => logger.error("Cache client error", err));
    }
  }

  async connect() {
    if (this.disableCache) {
      return;
    }

    await this.client.connect();
  }

  async set(key, value, expire = DEFAULT_CACHE_TTL) {
    if (this.disableCache) {
      return;
    }

    return this.client.set(
      key,
      typeof value === "string" ? value : JSON.stringify(value),
      "EX",
      expire,
    );
  }

  async get(key) {
    if (this.disableCache) {
      return;
    }

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
    if (this.disableCache) {
      return;
    }

    return this.client.ttl(key);
  }

  async del(key) {
    if (this.disableCache) {
      return;
    }

    return this.client.del(key);
  }

  async flush() {
    if (this.disableCache) {
      return;
    }

    return this.client.flushall();
  }

  async scan(key) {
    if (this.disableCache) {
      return;
    }

    const result = await this.client.scan(
      0,
      "MATCH",
      `${NODE_ENV}:${key}`,
      "COUNT",
      1000000000000,
    );
    return result[1];
  }
}

const cacheService = new CacheService();
export default cacheService;
