import axios from "axios";
import { KINETIX_SDK_BASE_URL } from "#common/config/constants.js";

class KinetixSDK {
  constructor() {
    this.axios = axios.create({
      baseURL: KINETIX_SDK_BASE_URL,
      headers: {
        "x-kinetix-agent": "on-premises-sdk",
      },
    });
  }

  async getVirtualWorlds(jwt) {
    const response = await this.axios.get("/v1/account/virtual-worlds", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    return response.data;
  }

  async getVirtualWorldConfig(jwt, vw) {
    const response = await this.axios.get(
      `/v1/account/virtual-worlds/${vw}/config`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      },
    );

    return response.data;
  }

  async getUsers(jwt, vw) {
    const response = await this.axios.get(
      `/v1/account/virtual-worlds/${vw}/users`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      },
    );

    return response.data;
  }

  async getUsersEmotes(jwt, vw, user) {
    const response = await this.axios.get(
      `/v1/account/virtual-worlds/${vw}/users/${user}/emotes`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      },
    );

    return response.data;
  }
}

export default KinetixSDK;
