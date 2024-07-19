import express from "express";
import vwController from "#common/controllers/virtualWorld.js";
import userController from "#common/controllers/user.js";
import moderationController from "#common/controllers/moderation.js";
import validator from "#common/middlewares/validator.js";
import cognitoAuth from "#common/middlewares/cognitoAuth.js";
import ownership from "#common/middlewares/virtualWorldOwnership.js";

import {
  get,
  createVW,
  updateVW,
  removeVW,
  getKeys,
  createKey,
  deleteKey,
  getUserByVW,
  createUserByVW,
  addEmotesToUserByVW,
  deleteEmotesFromUserByVW,
  updateConf,
  listModeration,
} from "./schema.js";

const router = express.Router();

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
  "/virtual-worlds/:uuid/keys",
  validator(getKeys),
  cognitoAuth,
  ownership,
  vwController.listKeys,
);
router.post(
  "/virtual-worlds/:uuid/keys",
  validator(createKey),
  cognitoAuth,
  ownership,
  vwController.createKey,
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
