import {
  CACHE_STORE,
  CACHE_ENDPOINTS,
  DEFAULT_CACHE_TTL,
  DISABLE_CACHE,
} from "#common/config/constants.js";
import Memcached from "./memcached.js";
import Redis from "./redis.js";

class CacheService {
  constructor() {
    this.disableCache = DISABLE_CACHE;

    if (!DISABLE_CACHE) {
      if (CACHE_ENDPOINTS.length === 0 || CACHE_STORE === "none") {
        this.disableCache = true;
      } else {
        if (CACHE_STORE === "redis") {
          this.cache = new Redis();
        } else if (CACHE_STORE === "memcached") {
          this.cache = new Memcached();
        } else {
          this.disableCache = true;
        }
      }
    }
  }

  async set(key, value, expire = DEFAULT_CACHE_TTL) {
    if (this.disableCache) {
      return;
    }

    return this.cache.set(
      key,
      typeof value === "string" ? value : JSON.stringify(value),
      expire,
    );
  }

  async get(key) {
    if (this.disableCache) {
      return;
    }

    const result = await this.cache.get(key);
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

    return this.cache.ttl(key);
  }

  async del(key) {
    if (this.disableCache) {
      return;
    }

    return this.cache.del(key);
  }

  async flush() {
    if (this.disableCache) {
      return;
    }

    return this.cache.flushall();
  }

  async scan(key) {
    if (this.disableCache) {
      return;
    }

    const results = await this.cache.scan(key);
    return results;
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

const cacheService = new CacheService();
export default cacheService;
