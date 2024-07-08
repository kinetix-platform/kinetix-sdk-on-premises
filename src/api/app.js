import express from 'express';
import cors from 'cors';
import { createTerminus } from '@godaddy/terminus';
import cookieParser from 'cookie-parser';
import routers from '#api/routers/index.js';
import loggerMiddleware from '#api/middlewares/logger.js';
import errorMiddleware from '#api/middlewares/error.js';
import logger from '#common/services/logger.js';
import { API_PORT, API_CORS_ORIGINS } from '#common/config/constants.js';

const { associateModels } = await import(
  '#common/database/sequelize.js'
  );

await associateModels();

const app = express();
app.set('trust proxy', 1);
app.use(cors({
  origin: API_CORS_ORIGINS,
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(loggerMiddleware);
app.use(routers);
app.use(errorMiddleware);

class App {
  async start() {
    await new Promise(((resolve) => {
      const server = app.listen(API_PORT, () => {
        server.timeout = 1000 * 60 * 60;
        server.headersTimeout = 1000 * 60 * 60;
        createTerminus(server, {
          healthChecks: {
            '/': ({ state }) => Promise.resolve({
              version: process.env.npm_package_version,
              ...state,
            }),
          },
          signals: ['SIGINT', 'SIGBREAK', 'SIGTERM'],
          caseInsensitive: true,
          onShutdown: async () => {
            logger.info('Shutdown');
            await this.stop();
          },
          useExit0: true,
        });
        this.server = server;
        resolve(server);
      });
    }));
    logger.info(`Server started on ${API_PORT}`);
  }

  async stop() {
    this.server.close();
  }
}

export default new App();
