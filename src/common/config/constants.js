import dotenv from "dotenv-safe";

dotenv.config({
  allowEmptyValues: true,
  path: ".env",
  example: ".env.example",
});

export const COGNITO_CLIENT_ID =
  process.env.COGNITO_CLIENT_ID || "4vlnjvh4c64gh9qsbio5eiggc5";

export const COGNITO_USER_POOL_ID =
  process.env.COGNITO_USER_POOL_ID || "eu-west-1_wv8KnjgcT";

export const COMPATIBLE_DB_DIALECTS = ["postgres", "mysql", "mariadb", "mssql"];

export const DB_AUTO_SYNC = process.env.DB_AUTO_SYNC
  ? process.env.DB_AUTO_SYNC === "true"
  : true;

export const DB_USER = process.env.DB_USER;

export const DB_PASSWORD = process.env.DB_PASSWORD;

export const DB_NAME = process.env.DB_NAME;

export const DB_HOST = process.env.DB_HOST;

export const DB_PORT = process.env.DB_PORT;

export const DB_DIALECT = process.env.DB_DIALECT;

if (!COMPATIBLE_DB_DIALECTS.includes(DB_DIALECT)) {
  throw new Error(
    `${DB_DIALECT} is not supported, please use one of this supported dialect ${COMPATIBLE_DB_DIALECTS.join(", ")}`,
  );
}

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

export const NODE_ENV = process.env.NODE_ENV || "dev";

export const CACHE_REDIS_ENDPOINTS =
  process.env.CACHE_REDIS_ENDPOINTS.split(";");

export const DEFAULT_RENEWAL_TTL = process.env.DEFAULT_RENEWAL_TTL
  ? parseInt(process.env.DEFAULT_RENEWAL_TTL, 10)
  : 300;

export const DISABLE_CACHE = process.env.DISABLE_CACHE
  ? process.env.DISABLE_CACHE == "true"
  : false;

export const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4000;

export const API_CORS_ORIGINS = process.env.API_CORS_ORIGINS
  ? process.env.API_CORS_ORIGINS.split(";")
  : ["*"];

export const PORTAL_CORS_ORIGINS = process.env.PORTAL_CORS_ORIGINS
  ? process.PORTAL_CORS_ORIGINS.split(";")
  : ["*"];

export const EXPOSE_SWAGGER = process.env.EXPOSE_SWAGGER
  ? process.env.EXPOSE_SWAGGER === "true"
  : true;
