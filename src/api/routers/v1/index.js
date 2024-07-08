import express from "express";
import admin from "./admin/index.js";
import users from "./users/index.js";
import emotes from "./emotes/index.js";
import plans from "./plans/index.js";
import process from "./process/index.js";
import virtualWorld from "./virtualWorld/index.js";
import billingInfos from "./billingInfos/index.js";
import account from "./account/index.js";

const routers = {
  admin,
  account,
  "billing-informations": billingInfos,
  emotes,
  users,
  "virtual-world": virtualWorld,
  plans,
  process,
};

const router = express.Router();

Object.entries(routers).forEach(([name, subRouter]) =>
  router.use(`/${name}/`, subRouter),
);

export default router;
