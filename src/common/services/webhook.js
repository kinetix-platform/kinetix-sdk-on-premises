import axios from "axios";
import logger from "./logger.js";
import userService from "#common/services/repository/user.js";

class Webhook {
  async call(vw, process, status, extra) {
    const { uuid, emote, name } = process;
    const user = await userService.get(parseInt(process.user));
    try {
      if (vw.configuration.webhookUri) {
        await axios.post(vw.configuration.webhookUri, {
          uuid,
          user: user.virtualWorldId,
          status,
          emote,
          name,
          ...extra,
        });
        logger.info(`process ${uuid} notify ${vw.configuration.webhookUri}`);
      }
    } catch (error) {
      logger.error(
        `process ${uuid} ${status} cannot notify webhook ${vw.configuration.webhookUri}`,
        { message: error.message },
      );
    }
  }
}

export default new Webhook();
