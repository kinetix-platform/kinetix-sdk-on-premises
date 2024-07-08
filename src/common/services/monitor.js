import moment from "moment";
import Usage from "#common/database/models/sequelize/usage.js";
import UserActivity from "#common/database/models/sequelize/userActivity.js";
import cacheService from "./cache.js";
import identity from "./identity.js";

class MonitorService {
  async monitor(virtualWorld, event) {
    const startOfMonth = moment().utcOffset(0).startOf("months");
    if (!virtualWorld.plan) {
      virtualWorld.plan = await virtualWorld.getPlan();
    }
    let instanceUsage = await cacheService.get(
      `usages:${identity}:${virtualWorld.uuid}:${startOfMonth.unix()}:${virtualWorld.plan.id}:${virtualWorld.keyId}`,
    );
    if (!instanceUsage) {
      // Each instance usage only store it's own usage so we initialize an empty usage object
      instanceUsage = new Usage({
        virtualWorldId: virtualWorld.id,
        periodStart: startOfMonth,
        planId: virtualWorld.plan.id,
        keyId: virtualWorld.keyId,
      });
    }
    instanceUsage[event] += 1;
    // We still add one to the main usage object that is already merged, if used later in express pipeline
    if (virtualWorld.usage) {
      virtualWorld.usage[event] += 1;
    }

    await cacheService.set(
      `usages:${identity}:${virtualWorld.uuid}:${startOfMonth.unix()}:${virtualWorld.plan.id}:${virtualWorld.keyId}`,
      JSON.stringify(instanceUsage.dataValues || instanceUsage),
      129600,
    );
    return virtualWorld.usage;
  }

  async userHasActivityThisMonth(user) {
    const startOfMonth = moment().utcOffset(0).startOf("months");
    const activity = await UserActivity.findOne({
      where: { periodStart: startOfMonth, userId: user.id },
    });
    return !!activity;
  }

  async monitorUserActivity(user) {
    const startOfMonth = moment().utcOffset(0).startOf("months");
    const activity = new UserActivity({
      periodStart: startOfMonth,
      userId: user.id,
    });
    await activity.save();
  }
}
export default new MonitorService();
