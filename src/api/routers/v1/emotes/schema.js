import { Joi } from "#common/middlewares/validator.js";

export const get = {
  params: Joi.object()
    .keys({
      uuid: Joi.string().uuid().required(),
    })
    .required(),
};

export const getWithAvatar = {
  params: Joi.object()
    .keys({
      uuid: Joi.string().uuid().required(),
      avatarUuid: Joi.string().uuid().required(),
    })
    .required(),
};

export const search = {
  query: Joi.object().keys({
    q: Joi.string().required().max(50),
    size: Joi.number().integer().min(1).max(10),
  }),
};
