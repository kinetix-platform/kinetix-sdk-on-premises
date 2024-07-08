import express from "express";
import multer from "multer";
import controller from "../../../controllers/process.js";
import validator from "../../../middlewares/validator.js";
import tokenAuth from "../../../middlewares/tokenAuth.js";
import keyAuth from "../../../middlewares/keyAuth.js";
import keyWrite from "../../../middlewares/keyWrite.js";
import {
  create,
  createYT,
  get,
  requestToken,
  devRequestToken,
  getToken,
  videoDownload,
} from "./schema.js";
import monitor from "../../../middlewares/monitor.js";
import ugeLimitUser from "../../../middlewares/ugeLimitUser.js";

const videoUpload = multer({ dest: "videos/" }).any();

const { NODE_ENV } = process.env;

const router = express.Router();

router.post(
  "/",
  videoUpload,
  validator([create, createYT]),
  tokenAuth(true),
  monitor("calls"),
  monitor("uge", false),
  /*rateLimiting('upload', RATE_LIMIT_UPLOAD || 0),*/ controller.create,
);
router.get(
  "/token",
  validator(requestToken),
  keyAuth,
  keyWrite,
  monitor("calls"),
  monitor("uge", false),
  ugeLimitUser,
  controller.request,
);
router.get("/token/:uuid", validator(getToken), controller.getToken);

if (!NODE_ENV || ["development", "staging"].includes(NODE_ENV)) {
  router.get("/dev-token", validator(devRequestToken), controller.devRequest);
}

router.get(
  "/:uuid",
  validator(get),
  keyAuth,
  keyWrite,
  monitor("calls"),
  controller.get,
);
router.post(
  "/:uuid/validate",
  validator(get),
  keyAuth,
  keyWrite,
  monitor("calls"),
  controller.validate,
);
router.post(
  "/:uuid/retake",
  validator(get),
  keyAuth,
  keyWrite,
  monitor("calls"),
  controller.retake,
);

router.post(
  "/video/info",
  validator(videoDownload),
  tokenAuth(false),
  monitor("calls"),
  controller.videoInfo,
);
router.post(
  "/video/download",
  validator(videoDownload),
  tokenAuth(false),
  monitor("calls"),
  controller.videoDownload,
);

export default router;
