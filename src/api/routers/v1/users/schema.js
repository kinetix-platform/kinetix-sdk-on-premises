import { Joi } from "#common/middlewares/validator.js";

export const addEmote = {
  params: Joi.object().keys({
    userId: Joi.string().required(),
    emoteUuid: Joi.string().uuid().required(),
  }),
};

export const deleteEmote = {
  params: Joi.object().keys({
    userId: Joi.string().required(),
    emoteUuid: Joi.string().uuid().required(),
  }),
  body: Joi.object().keys({
    reason: Joi.string(),
  }),
};

export const updateEmote = {
  params: Joi.object().keys({
    userId: Joi.string().required(),
    emoteUuid: Joi.string().uuid().required(),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().min(4).max(16),
    })
    .required(),
};

export const getEmotes = {
  params: Joi.object().keys({
    userId: Joi.string().required(),
  }),
  query: Joi.object().keys({
    mature: Joi.boolean(),
    limit: Joi.number().integer().min(0),
    offset: Joi.number().integer().min(0),
    since: Joi.date(),
    until: Joi.date(),
  }),
};

export const getProcesses = {
  params: Joi.object().keys({
    userId: Joi.string().required(),
  }),
  query: Joi.object().keys({
    ongoingOnly: Joi.boolean(),
  }),
};
