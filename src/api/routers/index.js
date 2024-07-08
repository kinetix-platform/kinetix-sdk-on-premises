import express from "express";
import rootPublic from "./public/index.js";
import v1 from "./v1/index.js";
import v2 from "./v2/index.js";
import documentation from "./documentation.js";
import { EXPOSE_SWAGGER } from "#common/config/constants.js";

const router = express.Router();

if (EXPOSE_SWAGGER) {
  router.use("/documentation", documentation);
}

router.use("/", rootPublic);
router.use("/v1", v1);
router.use("/v2", v2);

export default router;
