import httpStatus from 'http-status';
import monitorService from '#common/services/monitor.js';
import HttpError from "#api/helpers/error.js";
import moment from "moment";
import { getCachedUsages, mergeUsages } from "#common/services/usage.js";

const { FORBIDDEN, INTERNAL_SERVER_ERROR } = httpStatus;

const limitMap = {
  calls: 'callsLimit',
  uge: 'mugeLimit',
  users: 'totalUsersLimit',
}

const hasReachedLimitForMetric = (vw, usage, metric) => usage && usage[metric] >= (vw.plan[limitMap[metric]] || Infinity)

export default (metric, monitor = true) => async (req, res, next) => {
  const { vw } = req;
  try {
    const startOfMonth = moment().utcOffset(0).startOf('months')
    let totalUsage;
    if (vw.plan.name === 'Limited') {
      const cachedUsages = await getCachedUsages(vw, startOfMonth)
      const storedUsages = (await vw.getUsages({ where: { planId: vw.plan.id }}));
      totalUsage = mergeUsages([ ...cachedUsages, ...(storedUsages ? storedUsages.map(storedUsage => storedUsage.dataValues) : []) ]);
    }
    if (hasReachedLimitForMetric(vw, totalUsage, metric) || hasReachedLimitForMetric(vw, vw.usage, metric)) {
      return next(new HttpError(null, {}, FORBIDDEN, 'Plan limit reached', 'planLimitReached'));
    }
    if (monitor) {
      vw.usage = await monitorService.monitor(vw, metric);
    }
  } catch (e) {
    return next(new HttpError(null, e, INTERNAL_SERVER_ERROR, 'An error occured'));
  }
  return next();
};
