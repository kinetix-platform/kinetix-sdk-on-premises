import httpStatus from 'http-status';
import HttpError from '#api/helpers/error.js';

const { BAD_REQUEST } = httpStatus;

/**
 *
 * @param {HttpError} error
 * @param {e.Request} req
 * @param {e.Response} res
 * @param {e.NextFunction} next even if not used, required cause express probably uses arguments[]
 */
// eslint-disable-next-line no-unused-vars
export default (error, req, res, next) => {
  if (error instanceof SyntaxError) {
    error = new HttpError(error, { details: error.message }, BAD_REQUEST, 'Malformed request');
  } else if (!(error instanceof HttpError)) {
    error = new HttpError(error);
  }
  const {
    message, code, data = {}, stack, errorCode,
  } = error;

  res.error = {
    ...(errorCode && { errorCode }),
    message,
    status: code,
    code,
    data,
    stack: stack.split('\n').slice(0,4).join('\n'),
  }

  return res.status(code).json({
    ...(errorCode && { errorCode }),
    message,
    data,
  });
};
