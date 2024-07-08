import express from 'express';
import users from './users/index.js';

const routers = {
  users,
};

const router = express.Router();

Object.entries(routers)
  .forEach(([name, subRouter]) => router.use(`/${name}/`, subRouter));

export default router;
