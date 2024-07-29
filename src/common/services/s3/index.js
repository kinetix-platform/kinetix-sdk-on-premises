import { FILES_HOSTING_SERVICE } from "#common/config/constants.js";
import AWSS3Service from "./aws.js";
import MinioS3Service from "./minio.js";
import FSService from "./fs.js";
import logger from "#common/helpers/logger.js";
import fs from "fs";

class S3Service {
  constructor() {
    switch (FILES_HOSTING_SERVICE) {
      case "aws":
        this.client = new AWSS3Service();
        break;
      case "minio":
        this.client = new MinioS3Service();
        break;
      default:
        this.client = new FSService();
        break;
    }
  }

  async upload({ localPath, deleteAfter = true, ...params }) {
    await this.client.upload({ localPath, ...params });
    if (deleteAfter) {
      await fs.promises.unlink(localPath);
      logger.info(`${localPath} has been deleted`);
    }
  }

  async download(params) {
    await this.client.download(params);
  }
}

const s3Service = new S3Service();
export default s3Service;
