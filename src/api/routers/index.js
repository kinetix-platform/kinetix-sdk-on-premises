import express from 'express';
import v1 from './v1/index.js';
import v2 from './v2/index.js';
import documentation from './documentation.js';

const router = express.Router();

router.use('/', documentation);
router.use('/v1', v1);
router.use('/v2', v2);

export default router;
