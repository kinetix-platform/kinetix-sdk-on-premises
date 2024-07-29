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

    logger.info("Minio: initialized");
  }

  async bucketExists() {
    return await this.minio.bucketExists(S3_BUCKET);
  }

  async createBucket() {
    const exists = await this.bucketExists();
    if (!exists) {
      await this.minio.makeBucket(S3_BUCKET);
      logger.info(`Minio: Bucket ${S3_BUCKET} created successfully`);
    } else {
      logger.debug(`Minio: Bucket ${S3_BUCKET} already exists`);
    }
  }

  async upload({ localPath, key }) {
    logger.debug(`Minio: uploading ${localPath} to s3://${S3_BUCKET}/${key}`);
    await this.minio.fPutObject(S3_BUCKET, key, localPath);
    logger.info(
      `Minio: ${localPath} has been uploaded to s3://${S3_BUCKET}/${key}`,
    );
  }

  async download({ key, localPath }) {
    logger.debug(`Minio: downloading s3://${S3_BUCKET}/${key} to ${localPath}`);
    await this.minio.fGetObject(S3_BUCKET, key, localPath);
    logger.info(
      `Minio: s3://${S3_BUCKET}/${key} has been downloaded to ${localPath}`,
    );
  }
}

export default MinioS3Service;
