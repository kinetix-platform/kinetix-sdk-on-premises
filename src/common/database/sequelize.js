import { Sequelize } from "sequelize";
import moment from "moment";
import sequelizeConfig from "#common/config/sequelize.js";
import {
  DB_POOL_MIN,
  DB_POOL_MAX,
  DB_POOL_IDLE,
  DB_LOGGING,
} from "#common/config/constants.js";

const { host, replicaHost, port, username, password, database, dialect } =
  sequelizeConfig;

/**
 * Every model (except relation tables) have an associate() method.
 * This method import all models and associate it to avoid cyclical dependencies
 * @returns {Promise<void>}
 */
export const associateModels = async () => {
  const { default: models, associationModels } = await import(
    "#common/database/models/index.js"
  );
  const allModels = { ...models, ...associationModels };
  Object.entries(models).forEach((entry) => entry[1].associate(allModels));
};

const getRandomWithinRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const initSequelize = () => {
  const maxConnectionAge = moment.duration(10, "minutes").asSeconds();

  const pool = {
    handleDisconnects: true,
    min: DB_POOL_MIN,
    max: DB_POOL_MAX,
    idle: DB_POOL_IDLE,
    validate: (obj) => {
      if (!obj.recycleWhen) {
        obj.recycleWhen = moment().add(
          getRandomWithinRange(maxConnectionAge, maxConnectionAge * 2),
          "seconds",
        );
        return true;
      }
      return moment().diff(obj.recycleWhen, "seconds") < 0;
    },
  };

  const default_options = {
    paranoid: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  };

  if (replicaHost) {
    const master = {
      host,
      username,
      password,
      port,
      database,
      pool,
    };
    const replica = { ...master, host: replicaHost };

    return new Sequelize(
      null,
      null,
      null,
      {
        dialect,
        ...(DB_LOGGING && {
          logging: false,
        }),
        replication: {
          write: master,
          read: [replica],
        },
      },
      default_options,
    );
  }

  return new Sequelize(
    database,
    username,
    password,
    {
      host,
      port,
      dialect,
      ...(DB_LOGGING && {
        logging: false,
      }),
      pool: {
        max: DB_POOL_MAX,
        min: DB_POOL_MIN,
        idle: DB_POOL_IDLE,
      },
    },
    default_options,
  );
};

const sequelize = initSequelize();
export default sequelize;
