import express from "express";
import webhook from "./webhook/index.js";

const routers = {
  webhook,
};

const router = express.Router();

Object.entries(routers).forEach(([name, subRouter]) =>
  router.use(`/${name}/`, subRouter),
);

export default router;
