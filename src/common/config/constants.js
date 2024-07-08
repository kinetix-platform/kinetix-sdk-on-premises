import dotenv from 'dotenv-safe';

dotenv.config({
  allowEmptyValues: true,
  path: '.env',
  example: '.env.example',
});

export const DB_USER = process.env.DB_USER;

export const DB_PASSWORD = process.env.DB_PASSWORD;

export const DB_NAME = process.env.DB_NAME;

export const DB_HOST = process.env.DB_HOST;

export const DB_PORT = process.env.DB_PORT;

export const DB_DIALECT = process.env.DB_DIALECT;

export const SEQUELIZE_LOGGING = process.env.SEQUELIZE_LOGGING ? process.env.SEQUELIZE_LOGGING == "true" : true;

export const DB_HOST_REPLICA = process.env.DB_HOST_REPLICA;

export const NODE_ENV = process.env.NODE_ENV || 'dev';

export const CACHE_REDIS_ENDPOINTS = process.env.CACHE_REDIS_ENDPOINTS.split(';');

export const DEFAULT_RENEWAL_TTL = process.env.DEFAULT_RENEWAL_TTL ? parseInt(process.env.DEFAULT_RENEWAL_TTL, 10) : 300;

export const DISABLE_CACHE = process.env.DISABLE_CACHE ? process.env.DISABLE_CACHE == "true" : false;
 
export const API_PORT = process.env.API_PORT ? parseInt(process.env.API_PORT) : 4000;

export const API_CORS_ORIGINS = process.env.API_CORS_ORIGINS ? process.env.API_CORS_ORIGINS.split(';') : ['*'];