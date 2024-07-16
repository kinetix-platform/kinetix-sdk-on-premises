import winston from "winston";
import os from "os";
import fs from "fs";
//import package_json from '../../../package.json';

const NPM_PACKAGE_VERSION = JSON.parse(
  fs.readFileSync("./package.json"),
).version;

const { LOG_FORMAT = "human" } = process.env;

const logFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp}:${level}: ${message}`;
});

class Logger {
  constructor() {
    this.logger = winston.createLogger({
      format:
        LOG_FORMAT === "json"
          ? winston.format.json()
          : winston.format.combine(
              winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
              winston.format.colorize(),
              logFormat,
            ),
      level: "http",
      defaultMeta: {
        ...(NPM_PACKAGE_VERSION && { version: NPM_PACKAGE_VERSION }),
        hostname: os.hostname(),
      },
      transports: [new winston.transports.Console()],
    });
  }

  static removeSensitiveData(requestData) {
    return requestData?.body?.password
      ? {
          ...requestData,
          body: {
            ...requestData.body,
            password: "***SENSITIVE_DATA***",
          },
        }
      : requestData;
  }

  http(message, data) {
    const { originalUrl, method, status, duration } = data;

    this.logger.http(
      LOG_FORMAT === "json"
        ? message
        : `${method} ${originalUrl} ${status} ${duration}ms`,
      Logger.removeSensitiveData(data),
    );
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

  debug(message, data) {
    this.logger.debug(message, Logger.removeSensitiveData(data));
  }
}

export default new Logger();
