import express from "express";
import multer from "multer";
import controller from "#common/controllers/process.js";
import validator from "#common/middlewares/validator.js";
import tokenAuth from "#common/middlewares/tokenAuth.js";
import keyAuth from "#common/middlewares/keyAuth.js";
import keyWrite from "#common/middlewares/keyWrite.js";
import { create, get, requestToken, getToken } from "./schema.js";
import ugeLimitUser from "#common/middlewares/ugeLimitUser.js";

const videoUpload = multer({ dest: "videos/" }).any();

const router = express.Router();

router.post(
  "/",
  videoUpload,
  validator([create]),
  tokenAuth(true),
  controller.create,
);

router.get(
  "/token",
  validator(requestToken),
  keyAuth,
  keyWrite,
  ugeLimitUser,
  controller.request,
);

router.get("/token/:uuid", validator(getToken), controller.getToken);

router.get("/:uuid", validator(get), keyAuth, keyWrite, controller.get);
router.post(
  "/:uuid/validate",
  validator(get),
  keyAuth,
  keyWrite,
  controller.validate,
);
router.post(
  "/:uuid/retake",
  validator(get),
  keyAuth,
  keyWrite,
  controller.retake,
);

export default router;
