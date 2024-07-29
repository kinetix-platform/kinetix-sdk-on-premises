import { S3 } from "@aws-sdk/client-s3";
import fs from "fs";
import logger from "#common/helpers/logger.js";
import {
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  S3_BUCKET,
  AWS_REGION,
} from "#common/config/constants.js";

class AWSS3Service {
  constructor() {
    this.config = {
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
      region: AWS_REGION,
    };

    this.s3 = new S3(this.config);
    logger.info("AWS S3: initialized");
  }

  async bucketExists() {
    try {
      await this.s3.headBucket({ Bucket: S3_BUCKET });
      return true;
    } catch (err) {
      if (err.statusCode === 404) {
        return false;
      }
      throw err;
    }
  }

  async createBucket() {
    const exists = await this.bucketExists();
    if (!exists) {
      await this.s3.createBucket({
        Bucket: S3_BUCKET,
        ObjectOwnership: "BucketOwnerEnforced",
      });
      logger.info(`AWS S3: Bucket ${S3_BUCKET} created successfully`);
    } else {
      logger.debug(`AWS S3: Bucket ${S3_BUCKET} already exists`);
    }
  }

  async upload({ localPath, key }) {
    logger.debug(`AWS S3: uploading ${localPath} to s3://${S3_BUCKET}/${key}`);
    const fileContent = await fs.promises.readFile(localPath);
    await this.s3.putObject({
      Bucket: S3_BUCKET,
      Key: key,
      Body: fileContent,
    });

    logger.info(
      `AWS S3: ${localPath} has been uploaded to s3://${S3_BUCKET}/${key}`,
    );
  }

  async download({ key, localPath }) {
    logger.debug(
      `AWS S3: downloading s3://${S3_BUCKET}/${key} to ${localPath}`,
    );
    const result = await this.s3.getObject({
      Bucket: S3_BUCKET,
      Key: key,
    });
    
    logger.info(
      `AWS S3: s3://${S3_BUCKET}/${key} has been downloaded to ${localPath}`,
    );
    await fs.promises.writeFile(localPath, result.Body);
  }
}

export default AWSS3Service;
