import httpStatus from 'http-status';
import logger from '#common/services/logger.js';
import HttpError from "#api/helpers/error.js";
import storeService from '#common/services/store.js';
import opensearch from '#common/services/opensearch.js';

const { INTERNAL_SERVER_ERROR, FORBIDDEN, NOT_FOUND, ENABLE_UNREAL = 'true' } = httpStatus;

class Controller {
  async get(req, res, next) {
    try {
      const { vw } = req;
      const { uuid } = req.params;
      const emote = await storeService.getEmote(uuid, vw);

      if (emote) {
        res.send(emote);
      } else {
        return next(new HttpError(null, {}, NOT_FOUND, 'Emote not found'));
      }
    } catch (e) {
      if (e?.response?.status === 404) {
        return next(new HttpError(null, {}, NOT_FOUND, 'Emote not found'));
      }

      logger.error(e.message, e);
      return next(new HttpError(null, {}, INTERNAL_SERVER_ERROR, 'An error occured'));
    }
  }
  
  async getCategories(req, res, next) {
    try {
      const { includeSubCategories } = req.query;
      const categories = await storeService.getCategories(includeSubCategories);
      res.send(categories);
    } catch (e) {
      return next(new HttpError(null, e, INTERNAL_SERVER_ERROR, 'An error occured'));
    }
  }
  
  async search(req, res, next) {
    try {
      const { vw, query } = req;
      const { q, size } = query;
      const emotes = await opensearch.search({ q, size }, vw.cognitoUuid);
      res.send(emotes);
    } catch (e) {
      return next(new HttpError(null, e, INTERNAL_SERVER_ERROR, 'An error occured'));
    }
  }

  async getWithAvatar(req, res, next) {
    let allowed = false;
    try {
      const { vw } = req;
      const { uuid, avatarUuid } = req.params;
      const { files, avatars, ...emote } = await storeService.getEmote(uuid, vw);
      const avatar = avatars ? avatars[avatarUuid] : null;

      if (!avatar) {
        return next(new HttpError(null, {}, NOT_FOUND, 'Avatar not found'));
      }

      const thumbnailGifUrl = avatar.find((a) => a.name === 'thumbnail' && a.extension === 'gif')?.url;
      const thumbnailPngUrl = avatar.find((a) => a.name === 'thumbnail' && a.extension === 'png')?.url;
      const animationFbxUrl = avatar.find((a) => a.name === 'animation' && a.extension === 'fbx')?.url;
      const animationGlbUrl = avatar.find((a) => a.name === 'animation' && a.extension === 'glb')?.url;
      const animationKinanimUrl = avatar.find((a) => a.name === 'animation' && a.extension === 'kinanim')?.url;
      const unrealGlbUrl = avatar.find((a) => a.name === 'unreal' && a.extension === 'glb')?.url;
      const avatarMappingUrl = avatar.find((a) => a.name === 'userData' && a.extension === 'json')?.url; 

      if (emote.source === 'backOffice' && emote.providers.find((p) => p.name === 'KinePortal')) {
        allowed = true;
      } else if (emote.source === 'sdk' || emote.source ===  null) {
        // TODO : add a way to enforce control of ownership to avoid vw to steal emote from another vw
        allowed = true;
      }

      if (allowed){
        res.send({
          ...emote,
          thumbnailGifUrl,
          thumbnailPngUrl,
          animationFbxUrl,
          animationGlbUrl,
          animationKinanimUrl,
          avatarMappingUrl,
          ...(ENABLE_UNREAL === 'true' && { unrealGlbUrl }),
        });
      } else {
        return next(new HttpError(null, {}, FORBIDDEN, 'You are not allowed to access this ressource'))
      }
    } catch (e) {
      if (e?.response?.status === 404) {
        return next(new HttpError(null, {}, NOT_FOUND, 'Emote not found'));
      }

      logger.error(e.message, e);
      return next(new HttpError(null, {}, INTERNAL_SERVER_ERROR, 'An error occured'));
    }
  }
}

export default new Controller();