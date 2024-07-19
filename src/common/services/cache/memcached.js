import Redis from "ioredis";
import {
  CACHE_ENDPOINTS,
  DEFAULT_CACHE_TTL,
  DISABLE_CACHE,
  NODE_ENV,
} from "#common/config/constants.js";
import logger from "../../helpers/logger.js";

class CacheService {
  constructor(endpoints, disableCache = false) {
    this.disableCache = disableCache;
    const DEFAULT_REDIS_OPTIONS = { keyPrefix: `${NODE_ENV}:` };

    if (endpoints.length > 1) {
      this.client = new Redis.Cluster(
        endpoints.map((endpoint) => ({
          host: endpoint.split(":")[0],
          port: endpoint.split(":")[1],
        })),
        DEFAULT_REDIS_OPTIONS,
      );
    } else if (endpoints.length === 1) {
      this.client = new Redis(endpoints[0], DEFAULT_REDIS_OPTIONS);
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

  async setEmotesVWUser(vwUuid, userVwId, value, expire = DEFAULT_CACHE_TTL) {
    return this.set(`emotesUser:${vwUuid}:${userVwId}`, value, expire);
  }

  async getEmotesVWUser(vwUuid, userVwId) {
    return this.get(`emotesUser:${vwUuid}:${userVwId}`);
  }

  async delEmotesVWUser(vwUuid, userVwId) {
    return this.del(`emotesUser:${vwUuid}:${userVwId}`);
  }

  async flushEmotesVW(vwUuid) {
    const keys = await this.scan(`emotesUser:${vwUuid}:*`);
    return Promise.all(
      keys.map((key) => this.del(key.split(":").slice(1).join(":"))),
    );
  }

  async ttlEmotesVWUser(vwUuid, userVwId) {
    return this.ttl(`emotesUser:${vwUuid}:${userVwId}`);
  }

  async setVWKey(key, value, expire = DEFAULT_CACHE_TTL) {
    return this.set(`vwKey:${key}`, value, expire);
  }

  async getVWKey(key) {
    return this.get(`vwKey:${key}`);
  }

  async delVWKey(key) {
    return this.del(`vwKey:${key}`);
  }

  async ttlVWKey(key) {
    return this.ttl(`vwKey:${key}`);
  }

  async setEmoteMetadata(vwUuid, emoteUuid, value, expire = DEFAULT_CACHE_TTL) {
    return this.set(`emoteMetadata:${vwUuid}:${emoteUuid}`, value, expire);
  }

  async getEmoteMetadata(vwUuid, emoteUuid) {
    return this.get(`emoteMetadata:${vwUuid}:${emoteUuid}`);
  }

  async delEmoteMetadata(vwUuid, emoteUuid) {
    return this.del(`emoteMetadata:${vwUuid}:${emoteUuid}`);
  }

  async ttlEmoteMetadata(vwUuid, emoteUuid) {
    return this.ttl(`emoteMetadata:${vwUuid}:${emoteUuid}`);
  }
}

const cacheService = new CacheService(CACHE_ENDPOINTS, DISABLE_CACHE);

export default cacheService;
