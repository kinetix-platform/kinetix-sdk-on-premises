import { Joi } from "#common/middlewares/validator.js";

export const createUser = {
  body: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

export const getUser = {
  params: Joi.object().keys({
    userId: Joi.string().required(),
  }),
};

export const updateConf = {
  body: Joi.object().keys({
    name: Joi.string().min(3).max(25),
    website: Joi.string().allow(null),
    webhookUri: Joi.string().uri().allow(null),
    defaultAvatarUuid: Joi.string().uuid().allow(null),
    enableGTAV: Joi.boolean().allow(null),
    ugcValidation: Joi.boolean().allow(null),
    ugcFrontentUrl: Joi.string().uri().allow(null),
  }),
};

export const usersGetAll = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  }),
  query: Joi.object().keys({
    name: Joi.string(),
    orderBy: Joi.string().valid("createdAt", "userId"),
    orderDirection: Joi.string().valid("ASC", "DESC"),
  }),
};
