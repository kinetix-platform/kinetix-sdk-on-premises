import express from 'express';
import controller from '../../../controllers/emotes.js';
import validator from '../../../middlewares/validator.js';
import keyAuth from '../../../middlewares/keyAuth.js';
import keyRead from '../../../middlewares/keyRead.js';
import { get, getWithAvatar, search, categoriesSearch } from './schema.js';
import monitor from "../../../middlewares/monitor.js";


const router = express.Router();

router.get('/search', validator(search), keyAuth, keyRead, monitor('calls'), controller.search);
router.get('/categories', validator(categoriesSearch), keyAuth, keyRead, monitor('calls'), controller.getCategories);
router.get('/:uuid', validator(get), keyAuth, keyRead, monitor('calls'), controller.get);
router.get('/:uuid/avatar/:avatarUuid', validator(getWithAvatar), keyAuth, keyRead, monitor('calls'), controller.getWithAvatar);

export default router;
