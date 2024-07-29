import path from "path";
import fs from "fs";
import logger from "#common/helpers/logger.js";
import { LOCAL_FS_TARGET } from "#common/config/constants.js";

class FSService {
  constructor() {}

  async upload({ localPath, key }) {
    logger.debug(`copying ${localPath} to ${LOCAL_FS_TARGET}/${key}`);
    await fs.promises.copyFile(
      localPath,
      path.resolve(path.join(LOCAL_FS_TARGET, key)),
    );
    logger.info(`${localPath} has been uploaded to ${LOCAL_FS_TARGET}/${key}`);
  }

  async download({ key, localPath }) {
    logger.debug(`copying ${LOCAL_FS_TARGET}/${key} to ${localPath}`);
    await fs.promises.copyFile(
      path.resolve(path.join(LOCAL_FS_TARGET, key)),
      localPath,
    );
    logger.info(`${LOCAL_FS_TARGET}/${key} has been copied to ${localPath}`);
  }
}

export default FSService;
