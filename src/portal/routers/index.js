import express from "express";
import rootPublic from "./public/index.js";
import v1 from "./v1/index.js";

const router = express.Router();
router.use("/v1", v1);
router.use("/", rootPublic);

export default router;
