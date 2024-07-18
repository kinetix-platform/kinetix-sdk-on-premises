import express from "express";
import rootPublic from "./public/index.js";
import v1 from "./v1/index.js";
import v2 from "./v2/index.js";
import documentation from "./documentation.js";
import logger from "#common/helpers/logger.js";
import { API_EXPOSE_SWAGGER, NODE_ENV } from "#common/config/constants.js";

const router = express.Router();

if (API_EXPOSE_SWAGGER) {
  router.use("/documentation", documentation);
  if (NODE_ENV === "production" && API_EXPOSE_SWAGGER) {
    logger.warn(
      `Swagger is exposed, this is not recommended for production usage`,
    );
  }
}

router.use("/v1", v1);
router.use("/v2", v2);

router.use("/", rootPublic);

export default router;
