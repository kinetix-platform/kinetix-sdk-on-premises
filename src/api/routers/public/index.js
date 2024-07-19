import express from "express";
import path from "path";
import { PORT } from "#common/config/constants.js";
const __dirname = import.meta.dirname;

const router = express.Router();

router.use(
  "/",
  express.static(path.resolve(`${__dirname}/www/`), { index: "index.html" }),
);
router.get("/env-config.js", (req, res) => {
  res.setHeader("content-type", "text/javascript");
  res.send(`
        window._env_ = {
        REACT_APP_API_BASE_URL:"/",
        REACT_APP_ENV:"production",
        REACT_APP_STORAGE_BASE_URL:"${req.protocol}://${req.hostname}:${PORT}",
    }`);
});

// handle everything else
router.get("*", function (req, res) {
  res.sendFile(path.resolve(`${__dirname}/www/`, "index.html"));
});

export default router;
