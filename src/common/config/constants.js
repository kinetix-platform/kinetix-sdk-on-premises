import dotenv from "dotenv-safe";
import logger from "#common/helpers/logger.js";

dotenv.config({
  allowEmptyValues: true,
  path: ".env",
  example: ".env.example",
});

// GLOBAL

export const NODE_ENV = process.env.NODE_ENV || "production";

// COGNITO

export const COGNITO_CLIENT_ID =
  process.env.COGNITO_CLIENT_ID || "4vlnjvh4c64gh9qsbio5eiggc5";

export const COGNITO_USER_POOL_ID =
  process.env.COGNITO_USER_POOL_ID || "eu-west-1_wv8KnjgcT";

// DATABASE CONFIGURATION

const COMPATIBLE_DB_DIALECTS = [
  "postgres",
  "mysql",
  "mariadb",
  "mssql",
  "oracle",
];

const IN_BETA_DB_DIALECTS = ["mssql", "oracle"];

const DB_DIALECTS_PORTS = {
  postgres: 5432,
  mysql: 3306,
  mariadb: 3306,
  mssql: 1433,
  oracle: 1521,
};

export const DB_DIALECT = process.env.DB_DIALECT;

export const DB_AUTO_SYNC = process.env.DB_AUTO_SYNC
  ? process.env.DB_AUTO_SYNC === "true"
  : true;

export const DB_PORT = process.env.DB_PORT
  ? process.env.DB_PORT
  : DB_DIALECTS_PORTS[DB_DIALECT];

export const DB_USER = process.env.DB_USER;

export const DB_PASSWORD = process.env.DB_PASSWORD;

export const DB_NAME = process.env.DB_NAME;

export const DB_HOST = process.env.DB_HOST;

export const DB_LOGGING = process.env.DB_LOGGING
  ? process.env.DB_LOGGING == "true"
  : true;

export const DB_POOL_MIN = process.env.DB_POOL_MIN
  ? parseInt(DB_POOL_MIN, 10)
  : 1;

export const DB_POOL_MAX = process.env.DB_POOL_MAX
  ? parseInt(DB_POOL_MAX, 10)
  : 20;

export const DB_POOL_IDLE = process.env.DB_POOL_IDLE
  ? parseInt(DB_POOL_IDLE, 10)
  : 30000;

export const DB_HOST_REPLICA = process.env.DB_HOST_REPLICA;

if (!COMPATIBLE_DB_DIALECTS.includes(DB_DIALECT)) {
  throw new Error(
    `${DB_DIALECT} is not supported, please use one of this supported database engines: ${COMPATIBLE_DB_DIALECTS.join(", ")}`,
  );
}

if (IN_BETA_DB_DIALECTS.includes(DB_DIALECT)) {
  logger.warn(`${DB_DIALECT} is currently in beta`);
}

// CACHE

const COMPATIBLE_CACHE_STORES = ["redis", "memcached"]

export const CACHE_STORE = process.env.CACHE_STORE;

export const CACHE_ENDPOINTS = process.env.CACHE_ENDPOINTS
  ? process.env.CACHE_ENDPOINTS.split(";")
  : null;

export const DISABLE_CACHE = process.env.DISABLE_CACHE
  ? process.env.DISABLE_CACHE == "true"
  : CACHE_ENDPOINTS
    ? false
    : true;

if (!DISABLE_CACHE && !COMPATIBLE_CACHE_STORES.includes(CACHE_STORE)) {
  throw new Error(
    `${CACHE_STORE} is not supported, please use one of this supported cache stores: ${COMPATIBLE_CACHE_STORES.join(", ")}`,
  );
}

export const DEFAULT_CACHE_TTL = process.env.DEFAULT_CACHE_TTL
  ? parseInt(process.env.DEFAULT_CACHE_TTL, 10)
  : 300;

if (DISABLE_CACHE && NODE_ENV === "production") {
  logger.warn(
    `Cache is disabled, this is not recommended for production usage`,
  );
}

// EXPRESS

export const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4000;

export const EXPOSE_SWAGGER = process.env.EXPOSE_SWAGGER ? process.env.EXPOSE_SWAGGER === "true" : NODE_ENV === "production"

export const CORS_ORIGINS = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(";")
  : ["*"];

export const API_EXPOSE_SWAGGER = process.env.EXPOSE_SWAGGER
  ? process.env.EXPOSE_SWAGGER === "true"
  : true;

if (NODE_ENV === "production" && API_EXPOSE_SWAGGER) {
  logger.warn(
    `Swagger is exposed, this is not recommended for production usage`,
  );
}

// S3

const COMPATIBLE_S3_CLIENT = ["fs", "aws", "minio"];

export const S3_CLIENT = process.env.S3_CLIENT;

if (!COMPATIBLE_S3_CLIENT.includes(S3_CLIENT)) {
  throw new Error(
    `${S3_CLIENT} is not supported, please use one of this supported s3 clients: ${COMPATIBLE_S3_CLIENT.join(", ")}`,
  );
}

if (NODE_ENV == "production" && S3_CLIENT === "fs") {
  logger.warn(
    `Using local file storage is not recommended for production usage`,
  );
}
