import express from 'express';
import multer from 'multer';
import vwController from '../../../controllers/virtualWorld.js';
import userController from '../../../controllers/user.js';
import processController from '../../../controllers/process.js';
import moderationController from '../../../controllers/moderation.js';
import validator from '../../../middlewares/validator.js';
import cognitoAuth from '../../../middlewares/cognitoAuth.js';
import ownership from '../../../middlewares/virtualWorldOwnership.js';

import {
    get,
    addEmotesByVW,
    getEmotesByVW,
    createVW,
    updateVW,
    removeVW,
    getKeys,
    getUsage,
    createKey,
    deleteKey,
    getUserByVW,
    updatePlan,
    aliasGetAll,
    aliasCreate,
    aliasGet,
    aliasUpdate,
    createUserByVW,
    addEmotesToUserByVW,
    deleteEmotesFromUserByVW,
    getAllProcesses,
    createText,
    createVideo,
    updateProcess,
    updateConf,
    listModeration,
} from './schema.js';

const videoUpload = multer({ dest: 'videos/' }).any();

const router = express.Router();

// PROCESSES TRY UGE/UGC
router.post('/processes', videoUpload, validator([createText, createVideo]), cognitoAuth, processController.create);
router.get('/processes', validator(getAllProcesses), cognitoAuth, processController.getAllByCognito);
router.get('/processes/:uuid', validator(get), cognitoAuth, processController.get);
router.put('/processes/:uuid', validator(updateProcess), cognitoAuth, processController.update);
router.delete('/processes/:uuid', validator(get), cognitoAuth, processController.delete);

// VW
router.get('/virtual-worlds', cognitoAuth, vwController.list);
router.post('/virtual-worlds', validator(createVW), cognitoAuth, vwController.create);
router.put('/virtual-worlds/:uuid', validator(updateVW), cognitoAuth, ownership, vwController.update);
router.delete('/virtual-worlds/:uuid', validator(removeVW), cognitoAuth, ownership, vwController.delete);
router.get('/virtual-worlds/:uuid/config', cognitoAuth, ownership, vwController.get);
router.put('/virtual-worlds/:uuid/config', validator(updateConf), cognitoAuth, ownership, vwController.update);

// VW / BILLING
router.get('/virtual-worlds/:uuid/usage', validator(getUsage), cognitoAuth, ownership, vwController.listUsage);
router.post('/virtual-worlds/:uuid/keys', validator(createKey), cognitoAuth, ownership, vwController.createKey);
router.get('/virtual-worlds/:uuid/keys', validator(getKeys), cognitoAuth, ownership, vwController.listKeys);
router.delete('/virtual-worlds/:uuid/keys/:keyUuid', validator(deleteKey), cognitoAuth, ownership, vwController.deleteKey);
router.put('/virtual-worlds/:uuid/plan', validator(updatePlan), cognitoAuth, ownership, vwController.updatePlan);

// VW / USERS
router.get('/virtual-worlds/:uuid/users', validator(get), cognitoAuth, ownership, vwController.getUsers);
router.post('/virtual-worlds/:uuid/users', validator(createUserByVW), cognitoAuth, ownership, vwController.createUser);
router.get('/virtual-worlds/:uuid/users/:userId/emotes', validator(getUserByVW), cognitoAuth, ownership, userController.getEmotes);
router.post('/virtual-worlds/:uuid/users/:userId/emotes/:emoteUuid', validator(addEmotesToUserByVW), cognitoAuth, ownership, userController.addEmote);
router.delete('/virtual-worlds/:uuid/users/:userId/emotes/:emoteUuid', validator(deleteEmotesFromUserByVW), cognitoAuth, ownership, userController.removeEmote);

// VW / EMOTES
router.get('/virtual-worlds/:uuid/emotes', validator(getEmotesByVW), cognitoAuth, ownership, vwController.getEmotes);
router.post('/virtual-worlds/:uuid/emotes', validator(addEmotesByVW), cognitoAuth, ownership, vwController.addEmotes);
router.delete('/virtual-worlds/:uuid/emotes', validator(addEmotesByVW), cognitoAuth, ownership, vwController.removeEmotes);

// VW / ALIAS
router.get('/virtual-worlds/:uuid/alias', validator(aliasGetAll), cognitoAuth, ownership, vwController.getAllAlias);
router.post('/virtual-worlds/:uuid/alias', validator(aliasCreate), cognitoAuth, ownership, vwController.createAlias);
router.get('/virtual-worlds/:uuid/alias/:aliasUuid', validator(aliasGet), cognitoAuth, ownership, vwController.getAlias);
router.put('/virtual-worlds/:uuid/alias/:aliasUuid', validator(aliasUpdate), cognitoAuth, ownership, vwController.updateAlias);
router.delete('/virtual-worlds/:uuid/alias/:aliasUuid', validator(aliasGet), cognitoAuth, ownership, vwController.deleteAlias);

// VW / MODERATION
router.get('/virtual-worlds/:uuid/moderation', validator(listModeration), cognitoAuth, ownership, moderationController.listModeration);
router.post('/virtual-worlds/:uuid/users/:userId/emotes/:emoteUuid/validate', validator(addEmotesToUserByVW), cognitoAuth, ownership, moderationController.validateModeration);

export default router;
