import moment from 'moment';
import httpStatus from 'http-status';
import VirtualWorldModel from '#common/database/models/sequelize/virtualWorld.js';
import PlanModel from '#common/database/models/sequelize/plan.js';
import KeyModel from '#common/database/models/sequelize/key.js';
import keyService from '#common/services/repository/key.js';
import HttpError from '#api/helpers/error.js';
import cacheService from '#common/services/cache.js';
import { getCachedUsages, mergeUsages } from "#common/services/usage.js";

const { FORBIDDEN, UNAUTHORIZED } = httpStatus;
export default async (req, res, next) => {
  const key = req.headers['x-api-key'];
  if (!key) {
    return next(new HttpError(null, {}, UNAUTHORIZED, 'Missing API key', 'missingApiKey'));
  }
  req.key = key;

  const cachedData = await cacheService.getVWKey(key);
  if (cachedData) {
    const vw = new VirtualWorldModel(cachedData);
    vw.plan = new PlanModel(cachedData.plan);
    vw.keys = cachedData.keys.map((k) => new KeyModel(k));
    vw.keyId = cachedData.keyId;
    vw.dataValues.plan = vw.plan;
    vw.dataValues.keys = vw.keys;
    req.vw = vw;
    return next();
  }

  const theKey = await keyService.getBy(
    { value: key }, 
    ['*'], 
    [
      { 
        model: VirtualWorldModel,
        as: 'virtualWorld',
        required: true,
        include: [
          {
            model: PlanModel,
            as: 'plan',
            required: true,
          },
          {
            model: KeyModel,
            as: 'keys',
            required: true,
          }
        ]
      }
    ]
  );

  if (!theKey) {
    return next(new HttpError(null, {}, FORBIDDEN, 'Unknown API key', 'unknownApiKey'));
  }
  if (theKey.expire && new Date() > new Date(theKey.expire)) {
    return next(new HttpError(null, {}, FORBIDDEN, 'Expired API key', 'expiredApiKey'));
  }
  if (theKey.isDeleted) {
    return next(new HttpError(null, {}, FORBIDDEN, 'Deleted API key', 'deletedApiKey'));
  }

  const vw = theKey.virtualWorld;
  if (!vw) {
    return next(new HttpError(null, {}, FORBIDDEN, 'Wrong API key', 'wrongApiKey'));
  }
  if (vw.isDeleted) {
    return next(new HttpError(null, {}, FORBIDDEN, 'Deleted virtual world', 'deletedVW'));
  }
  
  const startOfMonth = moment().utcOffset(0).startOf('months')
  const cachedUsages = await getCachedUsages(vw, startOfMonth);
  const storedUsages = (await vw.getUsages({ where: { periodStart: startOfMonth, planId: vw.plan.id }}));
  // Current usage is the stored usage + the sum of all instances cached usages.
  vw.usage = mergeUsages([ ...cachedUsages, ...(storedUsages ? storedUsages.map(storedUsage => storedUsage.dataValues) : []) ]);
  
  vw.keyId = theKey.id;
  await cacheService.setVWKey(key, {
    ...vw.dataValues,
    keyId: vw.keyId,
  })
  
  req.vw = vw;
  return next();
};
