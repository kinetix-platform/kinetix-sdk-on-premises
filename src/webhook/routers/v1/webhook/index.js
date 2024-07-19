import express from "express";
import controller from "#common/controllers/webhook.js";
import validator from "#common/middlewares/validator.js";

import { webhookPayload } from "./schema.js";

const router = express.Router();

router.post("/webhook", validator(webhookPayload), controller.handler);

export default router;
