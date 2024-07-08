import express from "express";
import controller from "#common/controllers/user.js";
import validator from "#common/middlewares/validator.js";
import keyAuth from "#common/middlewares/keyAuth.js";
import keyRead from "#common/middlewares/keyRead.js";
import { getProcesses } from "./schema.js";

const router = express.Router();

router.get(
  "/:userId/processes",
  validator(getProcesses),
  keyAuth,
  keyRead,
  controller.getProcessesV2,
);

export default router;
