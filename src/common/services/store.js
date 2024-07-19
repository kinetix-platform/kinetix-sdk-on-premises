import axios from "axios";
import hmac from "./hmac.js";
import _ from "lodash";
import logger from "../helpers/logger.js";
import signRequest from "./hmac.js";
import cacheService from "./cache/index.js";

const { KINETIX_BACKEND } = process.env;

class Store {
  constructor() {
    this.backendHost = KINETIX_BACKEND;
  }

  async getEmoteGallery(vw) {
    const baseRoute = `${this.backendHost}`;
    const provider = await this.getProvider();
    let nextRoute = `/api/v1/store?type=emote&noProcess=true&limit=100&offset=0&providers[]=${provider.id}`;
    const emotes = [];
    while (nextRoute) {
      const route = `${baseRoute}${nextRoute}`;
      const signature = hmac(route, null, "GET");
      const response = await axios(route, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `hmac signature=${signature}`,
          "x-cognito-uuid": vw.cognitoUuid,
        },
        body: {},
      });
      emotes.push(response.data);
      nextRoute = response.headers["x-pagination-next-page"];
    }

    return emotes;
  }

  async getAvatarsByCognito(cognitoUuid) {
    const baseRoute = `${this.backendHost}`;
    const route = `${baseRoute}/api/v1/assets?type=avatar&fetchAll=true&limit=1000&offset=0`;
    const signature = hmac(route, null, "GET");
    const response = await axios(route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `hmac signature=${signature}`,
        "x-cognito-uuid": cognitoUuid,
      },
      body: {},
    });
    return response.data.data;
  }

  async getTotalAvatarCount() {
    const baseRoute = `${this.backendHost}`;
    const route = `${baseRoute}/api/v1/assets?type=avatar&fetchAll=true&limit=1&offset=0&source=kinePortal`;
    const signature = hmac(route, null, "GET");
    const response = await axios(route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `hmac signature=${signature}`,
      },
      body: {},
    });
    return parseInt(response.headers["x-pagination-length"]);
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

  async getProvider() {
    const route = `${this.backendHost}/api/v1/providers`;
    const signature = hmac(route, null, "GET");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `hmac signature=${signature}`,
    };
    const r = await axios(route, {
      method: "GET",
      headers,
      body: {},
    });
    return r.data.data.find((p) => p.name === "KinePortal");
  }

  async getCategories(includeSubCategories = false) {
    const route = `${KINETIX_BACKEND}/api/v1/categories`;
    const signature = signRequest(route, null, "GET");
    const r = await axios.get(route, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `hmac signature=${signature}`,
      },
    });

    if (!includeSubCategories) {
      r.data.data = r.data.data
        .filter((c) => !c.parentId)
        .sort((a, b) => a.name.localeCompare(b.name));
    }

    return r.data;
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
