import path from "path";
import fs from "fs";
import logger from "#common/helpers/logger.js";
import { LOCAL_FS_TARGET } from "#common/config/constants.js";

class FSService {
  constructor() {}

  async bucketExists() {
    try {
      await fs.promises.access(LOCAL_FS_TARGET);
      return true;
    } catch {
      return false;
    }
  }

  async createBucket() {
    const exists = await this.bucketExists();
    if (!exists) {
      await fs.promises.mkdir(LOCAL_FS_TARGET, { recursive: true });
      logger.info(`FS: ${LOCAL_FS_TARGET} created successfully`);
    } else {
      logger.debug(`FS: ${LOCAL_FS_TARGET} already exists`);
    }
  }

  async upload({ localPath, key }) {
    logger.debug(`FS: copying ${localPath} to ${LOCAL_FS_TARGET}/${key}`);
    await fs.promises.copyFile(localPath, path.join(LOCAL_FS_TARGET, key));
    logger.info(
      `FS: ${localPath} has been uploaded to ${LOCAL_FS_TARGET}/${key}`,
    );
  }

  async download({ key, localPath }) {
    logger.debug(`FS: copying ${LOCAL_FS_TARGET}/${key} to ${localPath}`);
    await fs.promises.copyFile(path.join(LOCAL_FS_TARGET, key), localPath);
    logger.info(
      `FS: ${LOCAL_FS_TARGET}/${key} has been copied to ${localPath}`,
    );
  }
}

export default FSService;
