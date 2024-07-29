import logger from "#common/helpers/logger.js";
import Minio from "minio";
import {
  MINIO_ACCESS_KEY,
  MINIO_ENDPOINT,
  MINIO_PORT,
  MINIO_SECRET_KEY,
  MINIO_SSL,
  S3_BUCKET,
} from "#common/config/constants.js";

class MinioS3Service {
  constructor() {
    this.minio = new Minio.Client({
      endPoint: MINIO_ENDPOINT,
      port: MINIO_PORT,
      useSSL: MINIO_SSL,
      accessKey: MINIO_ACCESS_KEY,
      secretKey: MINIO_SECRET_KEY,
    });

    logger.info("Minio S3 initialized !");
  }

  async upload({ localPath, key }) {
    logger.debug(`uploading ${localPath} to s3://${S3_BUCKET}/${key}`);
    await this.minio.fPutObject(S3_BUCKET, key, localPath);
    logger.info(`${localPath} has been uploaded to s3://${S3_BUCKET}/${key}`);
  }

  async download({ key, localPath }) {
    logger.debug(`downloading s3://${S3_BUCKET}/${key} to ${localPath}`);
    await this.minio.fGetObject(S3_BUCKET, key, localPath);
    logger.info(`s3://${S3_BUCKET}/${key} has been downloaded to ${localPath}`);
  }
}

export default MinioS3Service;
