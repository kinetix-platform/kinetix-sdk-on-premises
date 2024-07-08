import { Joi } from '../../../middlewares/validator.js';

export const getProcesses = {
  params: Joi.object().keys({
    userId: Joi.string().required(),
  }),
  query: Joi.object().keys({
    processing: Joi.boolean(),
    validated: Joi.boolean(),
    rejected: Joi.boolean(),
    pending: Joi.boolean(),
    done: Joi.boolean(),
    failed: Joi.boolean(),
    since: Joi.date(),
  }),
};
