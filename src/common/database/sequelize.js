import { Sequelize } from 'sequelize';
import moment from 'moment';
import sequelizeConfig from '../config/sequelize.js';

const { NODE_ENV } = process.env;

const {
  host, replicaHost, port, username, password, database, dialect,
} = sequelizeConfig;

/**
 * Every model (except relation tables) have an associate() method.
 * This method import all models and associate it to avoid cyclical dependencies
 * @returns {Promise<void>}
 */
export const associateModels = async () => {
  const { default: models, associationModels } = await import(
    '#common/database/models/sequelize/index.js'
  );
  const allModels = { ...models, ...associationModels };
  Object.entries(models).forEach((entry) => entry[1].associate(allModels));
};

const getRandomWithinRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let sequelize;

if (NODE_ENV === 'production') {
  const maxConnectionAge = moment.duration(10, 'minutes').asSeconds();
  const pool = {
    handleDisconnects: true,
    min: 1,
    max: 20,
    idle: 30000,
    validate: (obj) => {
      if (!obj.recycleWhen) {
        obj.recycleWhen = moment().add(
          getRandomWithinRange(maxConnectionAge, maxConnectionAge * 2),
          'seconds',
        );
        return true;
      }
      return moment().diff(obj.recycleWhen, 'seconds') < 0;
    },
  };
  const master = {
    host,
    username,
    password,
    port,
    database,
    pool,
  };
  const replica = { ...master, host: replicaHost };
  sequelize = new Sequelize(null, null, null, {
    dialect,
    ...((process.env.SEQUELIZE_LOGGING || 'true') !== 'true' && {
      logging: false,
    }),
    replication: {
      write: master,
      read: [replica],
    },
  });
}

export default sequelize
  || new Sequelize(
    database,
    username,
    password,
    {
      host,
      port,
      dialect,
      ...((process.env.SEQUELIZE_LOGGING || 'true') !== 'true' && {
        logging: false,
      }),
      pool: {
        max: 20,
        min: 1,
        idle: 30000,
      },
    },
    {
      timestamps: false,
    },
  );
