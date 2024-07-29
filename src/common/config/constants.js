import dotenv from "dotenv-safe";
import logger from "#common/helpers/logger.js";

dotenv.config({
  allowEmptyValues: true,
  path: ".env",
  example: ".env.example",
});

// GLOBAL

export const NODE_ENV = process.env.NODE_ENV || "production";

export const UGE_TOKEN_EXPIRE = process.env.UGE_TOKEN_EXPIRE
  ? parseInt(process.env.UGE_TOKEN_EXPIRE, 10)
  : 3600;

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
  : false;

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

if (!COMPATIBLE_DB_DIALECTS.includes(DB_DIALECT)) {
  throw new Error(
    `${DB_DIALECT} is not supported, please use one of this supported database engines: ${COMPATIBLE_DB_DIALECTS.join(", ")}`,
  );
}

if (IN_BETA_DB_DIALECTS.includes(DB_DIALECT)) {
  logger.warn(`${DB_DIALECT} is currently in beta`);
}

// DB REPLICA CONFIGURATION

export const DB_REPLICA_HOST = process.env.DB_REPLICA_HOST;

export const DB_REPLICA_PORT = process.env.DB_REPLICA_PORT || DB_PORT;

export const DB_REPLICA_USER = process.env.DB_REPLICA_USER || DB_USER;

export const DB_REPLICA_PASSWORD =
  process.env.DB_REPLICA_PASSWORD || DB_PASSWORD;

export const DB_REPLICA_NAME = process.env.DB_REPLICA_NAME || DB_NAME;

// CACHE

const COMPATIBLE_CACHE_STORES = ["redis", "memcached"];

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

export const PORT = process.env.PORT ? parseInt(process.env.PORT) : null;

export const API_PORT = PORT || 4000;

export const PORTAL_PORT = PORT || 40001;

export const WEBHOOK_PORT = PORT || 4002;

export const EXPOSE_SWAGGER = process.env.EXPOSE_SWAGGER
  ? process.env.EXPOSE_SWAGGER === "true"
  : NODE_ENV === "production";

export const CORS_ORIGINS = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(";")
  : ["*"];

export const API_EXPOSE_SWAGGER = process.env.EXPOSE_SWAGGER
  ? process.env.EXPOSE_SWAGGER === "true"
  : true;

// S3

const COMPATIBLE_FILES_HOSTING_SERVICES = ["fs", "minio", "aws"];

export const FILES_HOSTING_SERVICE = process.env.FILES_HOSTING_SERVICE;

if (!COMPATIBLE_FILES_HOSTING_SERVICES.includes(FILES_HOSTING_SERVICE)) {
  throw new Error(
    `${FILES_HOSTING_SERVICE} is not supported, please use one of this supported s3 clients: ${COMPATIBLE_FILES_HOSTING_SERVICES.join(", ")}`,
  );
}

if (NODE_ENV == "production" && FILES_HOSTING_SERVICE === "fs") {
  logger.warn(
    `Using local file storage is not recommended for production usage`,
  );
}

export const S3_BUCKET = process.env.S3_BUCKET;

export const LOCAL_FS_TARGET = process.env.LOCAL_FS_TARGET;

// AWS

export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;

export const AWS_REGION = process.env.AWS_REGION;

export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;

// MINIO

export const MINIO_ENDPOINT = process.env.MINIO_ENDPOINT;

export const MINIO_PORT = process.env.MINIO_PORT
  ? parseInt(process.env.MINIO_PORT, 10)
  : 9000;

export const MINIO_SSL = process.env.MINIO_SSL
  ? process.env.MINIO_SSL === "true"
  : true;

export const MINIO_ACCESS_KEY = process.env.MINIO_ACCESS_KEY;

export const MINIO_SECRET_KEY = process.env.MINIO_SECRET_KEY;
