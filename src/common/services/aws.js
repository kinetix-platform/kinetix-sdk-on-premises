import { CognitoIdentityProvider } from "@aws-sdk/client-cognito-identity-provider";
import { S3 } from "@aws-sdk/client-s3";
import fs from "fs";
import logger from "./logger.js";

const {
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  S3_BUCKET,
  COGNITO_USER_POOL_ID,
  AWS_ACCESS_KEY_ID_ROOT,
  AWS_SECRET_ACCESS_KEY_ROOT,
} = process.env;

class AWSService {
  constructor() {
    this.config = {
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
      region: "eu-west-1",
    };

    this.s3 = new S3(this.config);
    this.cognito = new CognitoIdentityProvider({
      credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID_ROOT,
        secretAccessKey: AWS_SECRET_ACCESS_KEY_ROOT,
      },
      region: "eu-west-1",
    });

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

  async getUuidFromEventPayload(data) {
    const json = JSON.parse(data.Body);
    if (json.uuid) return json.uuid;
    return data?.MessageAttributes?.uuid?.StringValue;
  }

  async getCognitoUserInfo(uuid) {
    const params = {
      Username: uuid,
      UserPoolId: COGNITO_USER_POOL_ID,
    };
    const data = await this.cognito.adminGetUser(params);
    const groupsData = await this.cognito.adminListGroupsForUser(params);
    const formatted = data?.UserAttributes.reduce((acc, ua) => {
      acc[ua.Name] = ua.Value;
      return acc;
    }, {});
    formatted["cognito:groups"] = groupsData.Groups.map(
      (group) => group.GroupName,
    );
    formatted.username = uuid;
    return formatted;
  }
}

export default new AWSService();
