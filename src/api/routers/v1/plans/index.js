import express from "express";
import controller from "../../../controllers/plans.js";
import validator from "../../../middlewares/validator.js";
import { get } from "./schema.js";
import cognitoAuth from "../../../middlewares/cognitoAuth.js";

const router = express.Router();

router.get("/", validator(get), cognitoAuth, controller.get);

export default router;
