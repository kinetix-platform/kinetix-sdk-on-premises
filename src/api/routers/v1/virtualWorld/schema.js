import { Joi } from "../../../middlewares/validator.js";

export const addEmotes = {
  body: Joi.object().keys({
    uuids: Joi.array().items(Joi.string().uuid().required()).required(),
  }),
};

export const createUser = {
  body: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

export const getEmotes = {
  query: Joi.object().keys({
    mature: Joi.boolean(),
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

export const aliasGetByName = {
  params: Joi.object().keys({
    name: Joi.string().required(),
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
