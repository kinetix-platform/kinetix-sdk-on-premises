import express from 'express';
import controller from '../../../controllers/user.js';
import validator from '../../../middlewares/validator.js';
import keyAuth from '../../../middlewares/keyAuth.js';
import keyRead from '../../../middlewares/keyRead.js';
import keyWrite from '../../../middlewares/keyWrite.js';
import { getEmotes, addEmote, getProcesses, deleteEmote, updateEmote } from './schema.js';
import monitor from "../../../middlewares/monitor.js";

const router = express.Router();

router.post('/:userId/emotes/:emoteUuid', validator(addEmote), keyAuth, keyWrite, monitor('calls'), controller.addEmote);
router.delete('/:userId/emotes/:emoteUuid', validator(deleteEmote), keyAuth, keyWrite, monitor('calls'), controller.removeEmote);
router.put('/:userId/emotes/:emoteUuid', validator(updateEmote), keyAuth, keyWrite, monitor('calls'), controller.updateEmote)
router.get('/:userId/emotes', validator(getEmotes), keyAuth, keyRead, monitor('calls'), controller.getEmotes);
router.get('/:userId/processes', validator(getProcesses), keyAuth, keyRead, monitor('calls'), controller.getProcesses);

export default router;
