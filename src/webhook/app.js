import express from "express";
import { createTerminus } from "@godaddy/terminus";
import loggerMiddleware from "#common/middlewares/logger.js";
import errorMiddleware from "#common/middlewares/error.js";
import logger from "#common/helpers/logger.js";
import { WEBHOOK_PORT } from "#common/config/constants.js";
import routers from "./routers/index.js";

const app = express();
app.set("trust proxy", 1);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(loggerMiddleware);
app.use(routers);
app.use(errorMiddleware);

class App {
  async start() {
    await new Promise((resolve) => {
      const server = app.listen(WEBHOOK_PORT, () => {
        server.timeout = 1000 * 60 * 60;
        server.headersTimeout = 1000 * 60 * 60;
        createTerminus(server, {
          healthChecks: {
            "/heathcheck": ({ state }) =>
              Promise.resolve({
                ...state,
              }),
          },
          signals: ["SIGINT", "SIGBREAK", "SIGTERM"],
          caseInsensitive: true,
          onShutdown: async () => {
            logger.info("Shutdown");
            await this.stop();
          },
          useExit0: true,
        });
        this.server = server;
        resolve(server);
      });
    });
    logger.info(`Webhook server started on ${WEBHOOK_PORT}`);
  }

  async stop() {
    this.server.close();
  }
}

export default new App();
