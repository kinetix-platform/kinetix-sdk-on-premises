import express from "express";
import controller from "#common/controllers/user.js";
import validator from "#common/middlewares/validator.js";
import keyAuth from "#common/middlewares/keyAuth.js";
import keyRead from "#common/middlewares/keyRead.js";
import keyWrite from "#common/middlewares/keyWrite.js";
import {
  getEmotes,
  addEmote,
  getProcesses,
  deleteEmote,
  updateEmote,
} from "./schema.js";

const router = express.Router();

router.post(
  "/:userId/emotes/:emoteUuid",
  validator(addEmote),
  keyAuth,
  keyWrite,
  controller.addEmote,
);
router.delete(
  "/:userId/emotes/:emoteUuid",
  validator(deleteEmote),
  keyAuth,
  keyWrite,
  controller.removeEmote,
);
router.put(
  "/:userId/emotes/:emoteUuid",
  validator(updateEmote),
  keyAuth,
  keyWrite,
  controller.updateEmote,
);
router.get(
  "/:userId/emotes",
  validator(getEmotes),
  keyAuth,
  keyRead,
  controller.getEmotes,
);
router.get(
  "/:userId/processes",
  validator(getProcesses),
  keyAuth,
  keyRead,
  controller.getProcesses,
);

export default router;
