import { Joi } from "#common/middlewares/validator.js";

export const get = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  }),
};

export const addEmotesToUserByVW = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
    userId: Joi.string().required(),
    emoteUuid: Joi.string().uuid().required(),
  }),
};

export const deleteEmotesFromUserByVW = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
    userId: Joi.string().required(),
    emoteUuid: Joi.string().uuid().required(),
  }),
  body: Joi.object().keys({
    reason: Joi.string(),
  }),
};

export const createUserByVW = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  }),
  body: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

export const getUserByVW = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
    userId: Joi.string().required(),
  }),
};

export const createKey = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  }),
  body: Joi.object()
    .keys({
      expire: Joi.date(),
      canRead: Joi.boolean().required(),
      canWrite: Joi.boolean().required(),
    })
    .required(),
};

export const getKeys = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  }),
};

export const deleteKey = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
    keyUuid: Joi.string().uuid().required(),
  }),
};

export const createVW = {
  body: Joi.object().keys({
    name: Joi.string().min(3).max(25),
    website: Joi.string(),
    webhookUri: Joi.string().uri(),
    mainUsage: Joi.string().valid("SDK", "API").default("SDK"),
  }),
};
export const updateVW = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  }),
  body: Joi.object().keys({
    name: Joi.string().min(3).max(25),
    website: Joi.string(),
    webhookUri: Joi.string().uri(),
  }),
};

export const removeVW = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  }),
};

export const listModeration = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  }),
  query: Joi.object().keys({
    limit: Joi.number().integer().min(0),
    offset: Joi.number().integer().min(0),
    threshold: Joi.number().min(0).max(1),
  }),
};

export const updateConf = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  }),
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
