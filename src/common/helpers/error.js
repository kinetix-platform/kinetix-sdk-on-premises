import httpStatus from "http-status";

const { INTERNAL_SERVER_ERROR } = httpStatus;

const generateErrorCode = (code, errorCode) => {
  if (errorCode) return errorCode;

  if (code === 400) return "badRequest";

  if (code === 404) return "notFound";

  if (code === 403) return "forbidden";

  return "";
};

class HttpError extends Error {
  constructor(error, data, code, message, errorCode = "") {
    super();
    this.stack = error?.stack || this.stack;
    this.code = code || error?.code || INTERNAL_SERVER_ERROR;
    if (!Number.isInteger(this.code)) {
      this.code = INTERNAL_SERVER_ERROR;
      data = { ...data, code: error?.code };
    }
    this.code = !Number.isInteger(this.code)
      ? INTERNAL_SERVER_ERROR
      : this.code;
    this.data = data || error?.data;
    this.message =
      message || error?.message || httpStatus[`${this.code}_MESSAGE`];
    this.errorCode = generateErrorCode(code, errorCode);
  }
}

export default HttpError;
