import express from "express";
import controller from "../../../controllers/virtualWorld.js";
import validator from "../../../middlewares/validator.js";
import keyAuth from "../../../middlewares/keyAuth.js";
import keyRead from "../../../middlewares/keyRead.js";
import keyWrite from "../../../middlewares/keyWrite.js";
import {
  addEmotes,
  getEmotes,
  updateConf,
  createUser,
  getUser,
  aliasGetByName,
} from "./schema.js";
import monitor from "../../../middlewares/monitor.js";

const router = express.Router();

// FOR SDK WITH API AKEY

// VW
router.put(
  "/config",
  validator(updateConf),
  keyAuth,
  keyWrite,
  controller.update,
);
router.get("/config", keyAuth, keyRead, controller.get);

// USERS
router.post(
  "/users",
  validator(createUser),
  keyAuth,
  keyWrite,
  monitor("calls"),
  monitor("users", false),
  controller.createUser,
);
router.get(
  "/users/:userId",
  validator(getUser),
  keyAuth,
  keyRead,
  monitor("calls"),
  controller.getUser,
);

// EMOTES
router.post(
  "/emotes",
  validator(addEmotes),
  keyAuth,
  keyWrite,
  monitor("calls"),
  controller.addEmotes,
);
router.get(
  "/emotes",
  validator(getEmotes),
  keyAuth,
  keyRead,
  monitor("calls"),
  controller.getEmotes,
);

// ALIAS
router.get(
  "/alias/:name",
  validator(aliasGetByName),
  keyAuth,
  keyRead,
  controller.getAliasEmote,
);

export default router;
