import express from 'express';
import controller from '../../../controllers/billingInfo.js';
import validator from '../../../middlewares/validator.js';
import cognitoAuth from '../../../middlewares/cognitoAuth.js';
import { create } from './schema.js';

const router = express.Router();

router.get('/', cognitoAuth, controller.get);
router.post('/', validator(create), cognitoAuth, controller.create);

export default router;
