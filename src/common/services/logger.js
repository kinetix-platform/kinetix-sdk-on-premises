import winston from 'winston';
import os from 'os';

const {
  ENV_NAME,
  SERVICE_NAME,
  npm_package_version: NPM_PACKAGE_VERSION,
} = process.env;

class Logger {
  constructor() {
    this.logger = winston.createLogger({
      format: winston.format.json(),
      level: 'http',
      defaultMeta: {
        ...(SERVICE_NAME && { service: SERVICE_NAME }),
        ...(NPM_PACKAGE_VERSION && { version: NPM_PACKAGE_VERSION }),
        ...(ENV_NAME && { env: ENV_NAME }),
        hostname: os.hostname(),
      },
      transports: [
        new winston.transports.Console(),
      ],
    });
  }

  static removeSensitiveData(requestData) {
    return requestData?.body?.password
      ? {
        ...requestData,
        body: {
          ...requestData.body,
          password: '***SENSITIVE_DATA***',
        },
      }
      : requestData;
  }

  http(message, data) {
    this.logger.http(message, Logger.removeSensitiveData(data));
  }

  info(message, data) {
    this.logger.info(message, Logger.removeSensitiveData(data));
  }

  warn(message, data) {
    this.logger.warn(message, Logger.removeSensitiveData(data));
  }

  error(message, data) {
    this.logger.error(message, Logger.removeSensitiveData(data));
  }

  req(level, message, req) {
    const {
      headers,
      body,
      query,
      originalUrl,
      method,
      ip,
      error,
      status,
      duration,
      contentLength,
    } = req;
    this[level]?.(message, {
      headers,
      body,
      query,
      originalUrl,
      method,
      ip,
      error,
      status,
      duration,
      contentLength,
    });
  }
}

export default new Logger();
