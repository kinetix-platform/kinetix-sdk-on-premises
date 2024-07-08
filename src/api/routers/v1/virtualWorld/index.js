import express from "express";
import controller from "#common/controllers/virtualWorld.js";
import validator from "#common/middlewares/validator.js";
import keyAuth from "#common/middlewares/keyAuth.js";
import keyRead from "#common/middlewares/keyRead.js";
import keyWrite from "#common/middlewares/keyWrite.js";
import { addEmotes, getEmotes, createUser, getUser } from "./schema.js";

const router = express.Router();

// FOR SDK WITH API AKEY

// USERS
router.post(
  "/users",
  validator(createUser),
  keyAuth,
  keyWrite,
  controller.createUser,
);

router.get(
  "/users/:userId",
  validator(getUser),
  keyAuth,
  keyRead,
  controller.getUser,
);

// EMOTES
router.post(
  "/emotes",
  validator(addEmotes),
  keyAuth,
  keyWrite,
  controller.addEmotes,
);

router.get(
  "/emotes",
  validator(getEmotes),
  keyAuth,
  keyRead,
  controller.getEmotes,
);

export default router;
