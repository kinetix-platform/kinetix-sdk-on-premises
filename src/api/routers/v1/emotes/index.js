import express from "express";
import controller from "#common/controllers/emotes.js";
import validator from "#common/middlewares/validator.js";
import keyAuth from "#common/middlewares/keyAuth.js";
import keyRead from "#common/middlewares/keyRead.js";
import { get, getWithAvatar, categoriesSearch } from "./schema.js";

const router = express.Router();

router.get(
  "/categories",
  validator(categoriesSearch),
  keyAuth,
  keyRead,
  controller.getCategories,
);
router.get("/:uuid", validator(get), keyAuth, keyRead, controller.get);
router.get(
  "/:uuid/avatar/:avatarUuid",
  validator(getWithAvatar),
  keyAuth,
  keyRead,
  controller.getWithAvatar,
);

export default router;
