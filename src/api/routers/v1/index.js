import express from "express";
import users from "./users/index.js";
import emotes from "./emotes/index.js";
import process from "./process/index.js";
import virtualWorld from "./virtualWorld/index.js";

const routers = {
  emotes,
  users,
  "virtual-world": virtualWorld,
  process,
};

const router = express.Router();

Object.entries(routers).forEach(([name, subRouter]) =>
  router.use(`/${name}/`, subRouter),
);

export default router;
