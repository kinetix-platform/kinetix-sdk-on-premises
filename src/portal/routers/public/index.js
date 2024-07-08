import express from "express";
import path from "path";
import { PORTAL_PORT } from "#common/config/constants.js";
const __dirname = import.meta.dirname;

const router = express.Router();

router.use(
  "/",
  express.static(path.resolve(`${__dirname}/www/`), { index: "index.html" }),
);
router.get("/env-config.js", (req, res) => {
  res.setHeader("content-type", "text/javascript");
  res.send(`window._env_ = {
        REACT_APP_API_BASE_URL:"/",
        REACT_APP_ENV:"production",
        REACT_APP_STORAGE_BASE_URL:"${req.protocol}://${req.hostname}:${PORTAL_PORT}",
        REACT_APP_ANIMATE_PROD_API_BASE_URL:"https://animate-api.kinetix.tech",
        REACT_APP_API_BASE_URL:"${req.protocol}://${req.hostname}:${PORTAL_PORT}",
        REACT_APP_AUTH_USER_POOL_ID:"eu-west-1_wv8KnjgcT",
        REACT_APP_BONE_MAPPING_REVIEW_EMOTE_UUIDS:"4f540e7e-736c-4127-a63a-fc39b8bd8855,fe924b98-4196-40b0-8cd8-3566f0e3d598,1bf508f3-4808-4aff-8966-b9c07e380679",
        REACT_APP_ENABLE_SETTINGS_PAGE:"true",
        REACT_APP_ENV:"production",
        REACT_APP_SAM_MODEL_URL:"https://storage.kinetix.tech/public/sanSam-model.fbx",
        REACT_APP_SAM_USER_DATA_URL:"https://storage.kinetix.tech/public/sanSam-userData.json",
        REACT_APP_AUTH_REGION:"eu-west-1",
        REACT_APP_AUTH_SESSION_IN_MS:"3600000",
        REACT_APP_AUTH_USER_POOL_WEB_CLIENT_ID:"1vha9kr6vv91k3q92r8ul33ba4",
        REACT_APP_ENABLE_AVATAR_MANAGEMENT:"true",
        REACT_APP_ENABLE_BONE_MAPPING:"true",
        REACT_APP_ENABLE_ONBOARDING:"false",
        REACT_APP_SDK_PROD_API_BASE_URL:"${req.protocol}://${req.hostname}:${PORTAL_PORT}",
        REACT_APP_ENABLE_MODERATION_OVERVIEW:"true",
    }`);
});

// handle everything else
router.get("*", function (req, res) {
  res.sendFile(path.resolve(`${__dirname}/www/`, "index.html"));
});

export default router;
