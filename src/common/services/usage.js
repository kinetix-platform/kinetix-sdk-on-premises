import cacheService from "./cache.js";

export const mergeUsages = (usages) =>
  usages
    .filter((e) => !!e)
    .reduce((acc, cur) => {
      Object.entries(cur).forEach(([key, value]) => {
        if (key.toLowerCase().includes("id") || typeof value !== "number") {
          if (!acc[key]) {
            acc[key] = value;
          }
          return acc;
        }
        acc[key] = acc[key] ? acc[key] + value : value;
        return acc;
      });
      return acc;
    }, {});

export const getCachedUsages = async (vw, startOfMonth) => {
  const caches = await cacheService.scan(
    `*usages:*:${vw.uuid}:${startOfMonth.unix()}:*`,
  );
  return Promise.all(
    caches.map(async (rawKey) => {
      const key = rawKey.split(":").slice(1).join(":");
      return cacheService.get(key);
    }),
  );
};
