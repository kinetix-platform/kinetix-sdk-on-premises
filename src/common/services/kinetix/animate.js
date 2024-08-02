import axios from "axios";
import { KINETIX_ANIMATE_BASE_URL } from "#common/config/constants.js";

class KinetixAnimate {
  constructor() {
    this.axios = axios.create({
      baseURL: KINETIX_ANIMATE_BASE_URL,
      headers: {
        "x-kinetix-agent": "on-premises-sdk",
      },
    });
  }
}

export default KinetixAnimate;
