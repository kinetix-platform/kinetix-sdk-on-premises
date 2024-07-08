import express from "express";
import account from "./account/index.js";

const routers = {
  account,
};

const router = express.Router();

Object.entries(routers).forEach(([name, subRouter]) =>
  router.use(`/${name}/`, subRouter),
);

export default router;
