import dotenv from "dotenv-safe";
dotenv.config({
  allowEmptyValues: true,
  example: ".env.example",
});

// INIT DB
import { initDB } from "#common/database/sequelize.js";
await initDB();

// INIT APP
import app from "./app.js";
await app.start();
