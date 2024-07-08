import express from "express";
import rootPublic from "./public/index.js";
import v1 from "./v1/index.js";

const router = express.Router();
router.use("/", rootPublic);
router.use("/v1", v1);

export default router;
