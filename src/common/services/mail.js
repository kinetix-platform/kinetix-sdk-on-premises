import fs from "fs";
import awsService from "./aws.js";

const { PORTAL_URL } = process.env;

class MailService {
  async sendAnimationReady(cognitoUuid, processUuid) {
    const { email } = await awsService.getCognitoUserInfo(cognitoUuid);
    if (email) {
      const template = await fs.promises.readFile(
        "./src/helpers/animation_ready.html",
        "utf8",
      );
      const subject = "Your animation file is ready !";
      let message = template.replaceAll(
        "[[url]]",
        `${PORTAL_URL}/animation-creator#animationUuid=${processUuid}`,
      );
      await awsService.genericMailLauncher(email, subject, message);
    }
  }
}

const service = new MailService();
export default service;
