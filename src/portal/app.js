import express from "express";
import cors from "cors";
import { createTerminus } from "@godaddy/terminus";
import cookieParser from "cookie-parser";
import loggerMiddleware from "#common/middlewares/logger.js";
import errorMiddleware from "#common/middlewares/error.js";
import logger from "#common/services/logger.js";
import { PORT, PORTAL_CORS_ORIGINS } from "#common/config/constants.js";
import routers from "./routers/index.js";

const app = express();
app.set("trust proxy", 1);
app.use(
  cors({
    origin: PORTAL_CORS_ORIGINS,
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(loggerMiddleware);
app.use(routers);
app.use(errorMiddleware);

class App {
  async start() {
    await new Promise((resolve) => {
      const server = app.listen(PORT, () => {
        server.timeout = 1000 * 60 * 60;
        server.headersTimeout = 1000 * 60 * 60;
        createTerminus(server, {
          healthChecks: {
            "/heathcheck": ({ state }) =>
              Promise.resolve({
                version: process.env.npm_package_version,
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
    logger.info(`Portal server started on ${PORT}`);
  }

  async stop() {
    this.server.close();
  }
}

export default new App();
