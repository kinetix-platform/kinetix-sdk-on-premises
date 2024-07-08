import { Joi } from '../../../middlewares/validator.js';

const file = ({ allowedTypes = [] }) => Joi.object()
  .keys({
    fieldname: Joi.string().required(),
    originalname: Joi.string().required(),
    encoding: Joi.string().required(),
    mimetype: Joi.string()
      .allow(...allowedTypes)
      .required(),
    destination: Joi.string().required(),
    filename: Joi.string().required(),
    path: Joi.string().required(),
    size: Joi.number().min(0).required(),
  })
  .required();

const defaultCreate = {
  mature: Joi.boolean().default(false),
  start: Joi.alternatives([
    Joi.string().allow(''),
    Joi.date().format('HH:mm:ss.SSS'),
  ]),
  end: Joi.alternatives([
    Joi.string().allow(''),
    Joi.date().format('HH:mm:ss.SSS'),
  ]),
  name: Joi.string(),
  x: [Joi.number().min(0), Joi.allow(null)],
  y: [Joi.number().min(0), Joi.allow(null)],
  outputWidth: [Joi.number().min(0), Joi.allow(null)],
  outputHeight: [Joi.number().min(0), Joi.allow(null)],
}

export const createYT = {
  body: Joi.object().keys({
    ...defaultCreate,
    videoUuid: Joi.string().uuid().required(),
  }).required(),
  files: Joi.forbidden()
}
export const create = {
  body: Joi.object().keys({
    ...defaultCreate,
    videoUuid: Joi.forbidden()
  }).required(),
  files: Joi.array()
    .items(
      file({ allowedTypes: ['video/ogg', 'video/mp4', 'video/webm'] }).required(),
    )
    .required(),
};

export const requestToken = {
  query: Joi.object().keys({
    userId: Joi.string().required(),
  }).required(),
};

export const getToken = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  }).required(),
};

export const get = {
  params: Joi.object().keys({
    uuid: Joi.string().uuid().required(),
  }).required(),
};

export const devRequestToken = {
  query: Joi.object().keys({
    userId: Joi.string().required(),
    key: Joi.string(),
  }).required(),
};

export const videoDownload = {
  body: Joi.object().keys({
    url: Joi.string().uri().required()
  })
}