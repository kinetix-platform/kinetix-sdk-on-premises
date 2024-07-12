import {
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST,
  DB_PORT,
  DB_DIALECT,
  DB_HOST_REPLICA,
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

if (DB_HOST_REPLICA) {
  options.replicaHost = DB_HOST_REPLICA;
}

export default options;
