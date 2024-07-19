import { Joi } from "#common/middlewares/validator.js";

export const webhookPayload = {
  body: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
    status: Joi.string().required(),
  }),
};
