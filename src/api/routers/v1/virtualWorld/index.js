import express from "express";
import controller from "#common/controllers/virtualWorld.js";
import validator from "#common/middlewares/validator.js";
import keyAuth from "#common/middlewares/keyAuth.js";
import keyRead from "#common/middlewares/keyRead.js";
import keyWrite from "#common/middlewares/keyWrite.js";
import { createUser, getUser } from "./schema.js";

const router = express.Router();

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

export default router;
