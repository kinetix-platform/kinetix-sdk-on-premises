import express from "express";
import multer from "multer";
import vwController from "#common/controllers/virtualWorld.js";
import userController from "#common/controllers/user.js";
import processController from "#common/controllers/process.js";
import moderationController from "#common/controllers/moderation.js";
import validator from "#common/middlewares/validator.js";
import cognitoAuth from "#common/middlewares/cognitoAuth.js";
import ownership from "#common/middlewares/virtualWorldOwnership.js";

import {
  get,
  addEmotesByVW,
  getEmotesByVW,
  createVW,
  updateVW,
  removeVW,
  getKeys,
  getUsage,
  createKey,
  deleteKey,
  getUserByVW,
  createUserByVW,
  addEmotesToUserByVW,
  deleteEmotesFromUserByVW,
  getAllProcesses,
  createText,
  createVideo,
  updateProcess,
  updateConf,
  listModeration,
} from "./schema.js";

const videoUpload = multer({ dest: "videos/" }).any();

const router = express.Router();

// PROCESSES TRY UGE/UGC
router.post(
  "/processes",
  videoUpload,
  validator([createText, createVideo]),
  cognitoAuth,
  processController.create,
);
router.get(
  "/processes",
  validator(getAllProcesses),
  cognitoAuth,
  processController.getAllByCognito,
);
router.get(
  "/processes/:uuid",
  validator(get),
  cognitoAuth,
  processController.get,
);
router.put(
  "/processes/:uuid",
  validator(updateProcess),
  cognitoAuth,
  processController.update,
);
router.delete(
  "/processes/:uuid",
  validator(get),
  cognitoAuth,
  processController.delete,
);

// VW
router.get("/virtual-worlds", cognitoAuth, vwController.list);
router.post(
  "/virtual-worlds",
  validator(createVW),
  cognitoAuth,
  vwController.create,
);
router.put(
  "/virtual-worlds/:uuid",
  validator(updateVW),
  cognitoAuth,
  ownership,
  vwController.update,
);
router.delete(
  "/virtual-worlds/:uuid",
  validator(removeVW),
  cognitoAuth,
  ownership,
  vwController.delete,
);
router.get(
  "/virtual-worlds/:uuid/config",
  cognitoAuth,
  ownership,
  vwController.get,
);
router.put(
  "/virtual-worlds/:uuid/config",
  validator(updateConf),
  cognitoAuth,
  ownership,
  vwController.update,
);

// VW / BILLING
router.get(
  "/virtual-worlds/:uuid/usage",
  validator(getUsage),
  cognitoAuth,
  ownership,
  vwController.listUsage,
);
router.post(
  "/virtual-worlds/:uuid/keys",
  validator(createKey),
  cognitoAuth,
  ownership,
  vwController.createKey,
);
router.get(
  "/virtual-worlds/:uuid/keys",
  validator(getKeys),
  cognitoAuth,
  ownership,
  vwController.listKeys,
);
router.delete(
  "/virtual-worlds/:uuid/keys/:keyUuid",
  validator(deleteKey),
  cognitoAuth,
  ownership,
  vwController.deleteKey,
);

// VW / USERS
router.get(
  "/virtual-worlds/:uuid/users",
  validator(get),
  cognitoAuth,
  ownership,
  vwController.getUsers,
);
router.post(
  "/virtual-worlds/:uuid/users",
  validator(createUserByVW),
  cognitoAuth,
  ownership,
  vwController.createUser,
);
router.get(
  "/virtual-worlds/:uuid/users/:userId/emotes",
  validator(getUserByVW),
  cognitoAuth,
  ownership,
  userController.getEmotes,
);
router.post(
  "/virtual-worlds/:uuid/users/:userId/emotes/:emoteUuid",
  validator(addEmotesToUserByVW),
  cognitoAuth,
  ownership,
  userController.addEmote,
);
router.delete(
  "/virtual-worlds/:uuid/users/:userId/emotes/:emoteUuid",
  validator(deleteEmotesFromUserByVW),
  cognitoAuth,
  ownership,
  userController.removeEmote,
);

// VW / EMOTES
router.get(
  "/virtual-worlds/:uuid/emotes",
  validator(getEmotesByVW),
  cognitoAuth,
  ownership,
  vwController.getEmotes,
);
router.post(
  "/virtual-worlds/:uuid/emotes",
  validator(addEmotesByVW),
  cognitoAuth,
  ownership,
  vwController.addEmotes,
);
router.delete(
  "/virtual-worlds/:uuid/emotes",
  validator(addEmotesByVW),
  cognitoAuth,
  ownership,
  vwController.removeEmotes,
);

// VW / MODERATION
router.get(
  "/virtual-worlds/:uuid/moderation",
  validator(listModeration),
  cognitoAuth,
  ownership,
  moderationController.listModeration,
);
router.post(
  "/virtual-worlds/:uuid/users/:userId/emotes/:emoteUuid/validate",
  validator(addEmotesToUserByVW),
  cognitoAuth,
  ownership,
  moderationController.validateModeration,
);

export default router;
