import { Joi } from "../../../middlewares/validator.js";

export const getActivity = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  }),
};

export const list = {
  query: Joi.object().keys({
    search: Joi.string(),
    email: Joi.string().email(),
    limit: Joi.number().integer().min(0),
    offset: Joi.number().integer().min(0),
  }),
};

export const search = {
  query: Joi.object().keys({
    search: Joi.string(),
    limit: Joi.number().integer().min(0),
    offset: Joi.number().integer().min(0),
  }),
};

export const avgEmotesPerUser = {
  query: Joi.object().keys({
    limit: Joi.number().integer().min(0),
    offset: Joi.number().integer().min(0),
    orderBy: Joi.string().valid("average", "name"),
    orderDirection: Joi.string().valid("ASC", "DESC"),
    vwUuids: Joi.array().items(Joi.string().uuid()),
  }),
};

export const rankUsersPerEmote = {
  query: Joi.object().keys({
    limit: Joi.number().integer().min(0),
    offset: Joi.number().integer().min(0),
    orderBy: Joi.string().valid("name", "count"),
    orderDirection: Joi.string().valid("ASC", "DESC"),
    vwUuids: Joi.array().items(Joi.string().uuid()),
    emoteUuids: Joi.array().items(Joi.string().uuid()),
  }),
};

export const rankModeration = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid(),
    userId: Joi.string(),
    emoteUuid: Joi.string().uuid(),
  }),
  body: Joi.object().keys({
    rank: Joi.number().integer().min(0).max(5),
  }),
};

export const stats = {
  query: Joi.object().keys({
    timeFrame: Joi.string().valid("day", "week", "month", "year"),
    start: Joi.date(),
    end: Joi.date(),
    email: Joi.string().email(),
  }),
};

export const listModeration = {
  query: Joi.object().keys({
    limit: Joi.number().integer().min(0),
    offset: Joi.number().integer().min(0),
    threshold: Joi.number().min(0).max(1),
  }),
};

export const exportStats = {
  params: Joi.object()
    .keys({
      email: Joi.string().email().required(),
    })
    .required(),
  query: Joi.object()
    .keys({
      format: Joi.string().valid("json", "xlsx"),
    })
    .default({
      format: "json",
    }),
};
