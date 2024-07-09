import dotenv from "dotenv-safe";

dotenv.config({
  allowEmptyValues: true,
  example: ".env.example",
});

const { default: app } = await import("./app.js");
await app.start();
