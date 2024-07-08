import express from "express";
import controller from "../../../controllers/user.js";
import validator from "../../../middlewares/validator.js";
import keyAuth from "../../../middlewares/keyAuth.js";
import keyRead from "../../../middlewares/keyRead.js";
import { getProcesses } from "./schema.js";
import monitor from "../../../middlewares/monitor.js";

const router = express.Router();

router.get(
  "/:userId/processes",
  validator(getProcesses),
  keyAuth,
  keyRead,
  monitor("calls"),
  controller.getProcessesV2,
);

export default router;
