import axios from "axios";
import hmac from "./hmac.js";
import _ from "lodash";
import logger from "../helpers/logger.js";
import cacheService from "./cache/index.js";

const { KINETIX_BACKEND } = process.env;

class Store {
  constructor() {
    this.backendHost = KINETIX_BACKEND;
  }

  async getEmotes(emotes, vw, { mature, categories } = {}) {
    const emotesData = await Promise.allSettled(
      emotes.map(async (emote) => {
        try {
          emote.data = await this.getEmote(emote.emoteUuid, vw);
          if (typeof mature === "boolean") {
            emote = emote?.data?.metadata?.maturity !== mature ? null : emote;
          }

          if (emote && categories && categories.length) {
            const cats = _.intersection(
              emote.data.categories.map((cat) => cat.uuid),
              categories,
            );
            if (cats.length === 0) {
              emote = null;
            }
          }

          return emote;
        } catch (e) {
          logger.error(e.message);
          e.error = e;
        }
      }),
    );
    return emotesData.map((e) => e.value).filter((e) => !!e);
  }

  async getAsset(uuid, vw) {
    const route = `${this.backendHost}/api/v1/assets/${uuid}`;
    const signature = hmac(route, null, "GET");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `hmac signature=${signature}`,
    };
    if (vw && vw.cognitoUuid) {
      headers["x-cognito-uuid"] = vw.cognitoUuid;
    }
    const r = await axios(route, {
      method: "GET",
      headers,
      body: {},
    });

    return r.data.data;
  }

  // If emote and vw, more complex
  async getAssetByType(type, uuid, vw) {
    let asset;
    if (type === "emote" && uuid && vw && vw.uuid) {
      asset = cacheService.getEmoteMetadata(vw.uuid, uuid);
      if (asset.uuid) return asset;
    }

    const route = `${this.backendHost}/api/v1/assets/${type}/${uuid}`;
    const signature = hmac(route, null, "GET");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `hmac signature=${signature}`,
    };
    if (vw && vw.cognitoUuid) {
      headers["x-cognito-uuid"] = vw.cognitoUuid;
    }
    const r = await axios(route, {
      method: "GET",
      headers,
      body: {},
    });

    asset = r.data.data;

    if (type === "emote" && uuid && vw && vw.uuid) {
      await cacheService.setEmoteMetadata(vw.uuid, uuid, asset);
      return asset;
    }

    return asset;
  }

  async getEmote(uuid, vw) {
    const asset = await this.getAssetByType("emote", uuid, vw);
    const { tags, ...data } = asset;

    data.defaultThumbnailGifUrl = data.files.find(
      (f) => f.name === "thumbnail" && f.extension === "gif",
    )?.url;
    data.defaultThumbnailPngUrl = data.files.find(
      (f) => f.name === "thumbnail" && f.extension === "png",
    )?.url;

    if (vw?.configuration?.defaultAvatarUuid) {
      const avatar = data.avatars[vw.configuration.defaultAvatarUuid];
      if (avatar) {
        data.defaultThumbnailGifUrl = avatar.find(
          (f) => f.name === "thumbnail" && f.extension === "gif",
        )?.url;
        data.defaultThumbnailPngUrl = avatar.find(
          (f) => f.name === "thumbnail" && f.extension === "png",
        )?.url;
      }
    }

    return data;
  }

  async updateEmote(uuid, { name }, vw) {
    const route = `${this.backendHost}/api/v1/assets/${uuid}`;
    const signature = hmac(route, { name }, "PUT");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `hmac signature=${signature}`,
    };
    if (vw && vw.cognitoUuid) {
      headers["x-cognito-uuid"] = vw.cognitoUuid;
    }
    const r = await axios(route, {
      method: "PUT",
      headers,
      data: { name },
    });

    return r.data.data;
  }
}

export default new Store();
