import cacheService from "./cache.js";
import usageService from "./repository/usage.js";
import vwService from "./repository/virtualWorld.js";
import dynamoService from "./dynamo.js";
import webhookService from "./webhook.js";
import logger from "./logger.js";
import _ from "lodash";
import moment from "moment";

export default {
  ml_running: async (data) => {
    const { uuid, ...rest } = data;
    logger.info(`ml_running ${uuid}`);
    const process = await dynamoService.getProcess(uuid);
    const vw = await vwService.get(process.vw);
    await webhookService.call(vw, process, "processing", { ...rest });
  },
  "enforce-usage": async () => {
    logger.info("enforce-usage");
    const usages = await cacheService.scan(`*usages:*`);
    try {
      // First, group all the caches usages by virtual world
      const usageKeys = _.groupBy(usages, (key) => {
        return key.split(":")[3];
      });
      // Iterate over each virtual world having usages
      await Promise.all(
        Object.entries(usageKeys).map(async ([vwUuid, vwKeys]) => {
          const vw = await vwService.getBy({ uuid: vwUuid });
          // Then group by period/plan/key groups
          const keysByGroup = _.groupBy(vwKeys, (key) => {
            return key.split(":").slice(-3).join(":");
          });
          // Iterate over the groups corresponding to the current virtual world
          await Promise.all(
            Object.entries(keysByGroup).map(
              async ([groupString, groupKeys]) => {
                const [timestamp, planId, keyIdString] = groupString.split(":");
                const keyId = keyIdString === "undefined" ? null : keyIdString;
                // Extract corresponding stored usages and cached instances entries
                const storedUsage = await usageService.getAll(
                  {
                    periodStart: moment.unix(timestamp).utcOffset(0),
                    planId,
                    virtualWorldId: vw.id,
                    keyId,
                  },
                  ["*"],
                  { raw: true, order: [["created_at", "DESC"]] },
                );
                const instanceValues = await Promise.all(
                  groupKeys.map(async (rawKey) => {
                    const key = rawKey.split(":").slice(1).join(":");
                    return cacheService.get(key);
                  }),
                );
                // If a usage has already been stored, include it in the array
                if (storedUsage[0]) {
                  instanceValues.push(storedUsage[0]);
                }

                // Merge the found usages into one usage object. Keep the id if it already exists in a stored usage
                const mergedUsage = instanceValues.reduce((acc, cur) => {
                  Object.entries(cur).forEach(([key, value]) => {
                    if (key === "lastUsage") {
                      const date = new Date(value);
                      acc[key] = !acc[key] || date > acc[key] ? date : acc[key];
                      return acc;
                    }
                    if (
                      key.toLowerCase().includes("id") ||
                      typeof value !== "number"
                    ) {
                      if (!acc[key] && !["createdAt"].includes(key)) {
                        acc[key] = value;
                      }
                      return acc;
                    }
                    acc[key] = acc[key] ? acc[key] + value : value;
                    return acc;
                  });
                  return acc;
                }, {});

                // Create or update a stored usage (using existing stored usage id if found)
                if (mergedUsage.id) {
                  await usageService.update(mergedUsage);
                } else {
                  await usageService.create(mergedUsage);
                }

                // Delete the redis entries that has been merged
                await Promise.all(
                  groupKeys.map(async (rawKey) => {
                    const key = rawKey.split(":").slice(1).join(":");
                    return cacheService.del(key);
                  }),
                );
              },
            ),
          );
        }),
      );
    } catch (e) {
      logger.error(`Enforce usage error : ${e}`);
      throw new Error(e);
    }
  },
};
