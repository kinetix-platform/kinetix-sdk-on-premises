import { S3 } from "@aws-sdk/client-s3";
import fs from "fs";
import logger from "./logger.js";

const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, S3_BUCKET } = process.env;

class AWSService {
  constructor() {
    this.config = {
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
      region: "eu-west-1",
    };

    this.s3 = new S3(this.config);
    logger.info("AWS Service initialized !");
  }

  async upload(location, path) {
    logger.info(`uploading ${location} to ${path}`);
    const fileContent = await fs.promises.readFile(location);
    logger.info("file content read");
    return this.s3.putObject({
      Bucket: S3_BUCKET,
      Key: path,
      Body: fileContent,
    });
  }

  async download(path, destination) {
    logger.info(`downloading ${path} to ${destination}`);
    const result = await this.s3.getObject({
      Bucket: S3_BUCKET,
      Key: path,
    });
    await fs.promises.writeFile(destination, result.Body);
  }
}

export default new AWSService();
