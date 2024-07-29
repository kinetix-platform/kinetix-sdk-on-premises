import Redis from "ioredis";
import {
  CACHE_ENDPOINTS,
  DEFAULT_CACHE_TTL,
  NODE_ENV,
} from "#common/config/constants.js";
import logger from "../../helpers/logger.js";

class RedisService {
  constructor() {
    const DEFAULT_OPTIONS = { keyPrefix: `${NODE_ENV}:` };

    if (CACHE_ENDPOINTS.length > 1) {
      this.client = new Redis.Cluster(
        CACHE_ENDPOINTS.map((endpoint) => ({
          host: endpoint.split(":")[0],
          port: endpoint.split(":")[1],
        })),
        DEFAULT_OPTIONS,
      );
    } else {
      this.client = new Redis(CACHE_ENDPOINTS[0], DEFAULT_OPTIONS);
    }

    if (this.client) {
      this.client.on("connect", () => logger.info("Redis: Cache connected"));
      this.client.on("error", (err) =>
        logger.error("Redis: Cache client error", err),
      );
    }
  }

  async set(key, value, expire = DEFAULT_CACHE_TTL) {
    return this.client.set(
      key,
      typeof value === "string" ? value : JSON.stringify(value),
      "EX",
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
    return this.client.flushall();
  }

  async scan(key) {
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

export default RedisService;
