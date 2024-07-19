import {
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST,
  DB_PORT,
  DB_DIALECT,
  DB_REPLICA_HOST,
  DB_LOGGING,
} from "./constants.js";

const options = {
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
  logging: DB_LOGGING !== "false",
};

if (DB_REPLICA_HOST) {
  options.replicaHost = DB_REPLICA_HOST;
}

export default options;
