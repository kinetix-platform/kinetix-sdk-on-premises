import JoiBase from '@hapi/joi';
import JoiDate from '@hapi/joi-date';

export const Joi = JoiBase.extend(JoiDate);

const baseSchema = {
  headers: Joi.object(),
};

const validateSchema = (schema, req) => {
  const fullSchema = Joi.object().keys({
    ...baseSchema,
    ...schema,
  });

  // We are only interested in those fields
  const {
    query, params, body, headers, files,
  } = req;
  const validationData = {
    query, params, body, headers, files,
  };

  // We remove the empty objects to use the allowUnknown: false
  Object
    .keys(validationData)
    .forEach((key) => !Object.keys(validationData[key]
      || {}).length && delete validationData[key]);

  const options = { allowUnknown: false, abortEarly: false };
  const { error, value } = fullSchema.validate(validationData, options);

  if (error) {
    const message = error.details.map((detail) => detail?.message).join(', ');
    return {
      error: true,
      details: message,
      message: 'malformed request',
    };
  }

  // We inject the parsed result back to the req
  req.originalBody = req.body;
  req.query = { ...req.query, ...value.query };
  req.params = { ...req.params, ...value.params };
  req.body = { ...req.body, ...value.body };
  req.headers = { ...req.headers, ...value.headers };

  return {
    error: false,
  };
}

const errorResponse = (res, error) => {
  res.error = {
    code: 400,
    message: error.message,
    data: error.details,
  }
  return res.status(400).send(error);
}

/**
 * @typedef {Function} ValidatorMiddleware
 * @param {e.Request} req
 * @param {e.Response} res
 * @param {e.NextFunction} next
 */

/**
 * The middleware that handles the route validation
 *
 * @param {Object} schema Joi schema object
 * @returns {ValidatorMiddleware}
 */
export default (schema) => (req, res, next) => {
  try {
    if (!schema) {
      return next();
    }


    if (Array.isArray(schema)) {
      const validations = schema.map((s) => validateSchema(s, req));
      const oneOk = validations.find((v) => v.error === false)
      if (!oneOk) {
        return errorResponse(res, {
          message: 'malformed request',
          details: validations.map((v) => v.details),
        })
      }
    } else {
      const validation = validateSchema(schema, req);
      if (validation.error) {
        return errorResponse(res, {
          details: validation.details,
          message: validation.message,
        })
      }
    }
    
    return next();
  } catch (e) {
    return next(e);
  }
};
