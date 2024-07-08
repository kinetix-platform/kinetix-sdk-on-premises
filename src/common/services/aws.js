import httpStatus from "http-status";
import dynamoose from "dynamoose";
import { CognitoIdentityProvider } from "@aws-sdk/client-cognito-identity-provider";
import { Lambda } from "@aws-sdk/client-lambda";
import { S3 } from "@aws-sdk/client-s3";
import fs from "fs";
import logger from "./logger.js";
import { parse as dateParse, differenceInMilliseconds } from "date-fns";
import HttpError from "#api/helpers/error.js";
import archiver from "archiver";

const {
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  S3_BUCKET,
  EMOTE_PREVIEW_LAMBDA_NAME,
  TRANSCODE_LAMBDA_NAME,
  COGNITO_USER_POOL_ID,
  AWS_ACCESS_KEY_ID_ROOT,
  AWS_SECRET_ACCESS_KEY_ROOT,
  YOUTUBE_DL_LAMBDA_NAME,
  JSON2FBX_LAMBDA_NAME,
  MESH_REMOVER_LAMBDA_NAME,
  MODERATOR_LAMBDA_NAME,
  DISABLE_INTERNAL_BLACKLIST,
  GLB2KINANIM_LAMBDA_NAME,
  RETARGETOR_LAMBDA_NAME,
  EMOTIZATION_LAMBDA_NAME,
} = process.env;

const {
  NOT_ACCEPTABLE,
  REQUEST_ENTITY_TOO_LARGE,
  UNPROCESSABLE_ENTITY,
  NOT_FOUND,
} = httpStatus;

class AWSService {
  constructor() {
    this.config = {
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
      region: "eu-west-1",
    };

    this.s3 = new S3(this.config);
    this.lambda = new Lambda(this.config);
    this.cognito = new CognitoIdentityProvider({
      credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID_ROOT,
        secretAccessKey: AWS_SECRET_ACCESS_KEY_ROOT,
      },
      region: "eu-west-1",
    });

    const ddb = new dynamoose.aws.ddb.DynamoDB(this.config);
    dynamoose.aws.ddb.set(ddb);

    logger.info("AWS Service initialized !");
  }

  async getCognitoUserInfoByEmail(email) {
    try {
      const { Users } = await this.cognito.listUsers({
        UserPoolId: COGNITO_USER_POOL_ID,
        Limit: 1,
        Filter: `email = "${email}"`,
      });

      if (Users.length > 0) {
        const { Attributes, ...user } = Users[0];
        Attributes.filter((att) => att.Name !== "updated_at").forEach(
          ({ Name, Value }) => {
            user[Name] = Name === "updated_at" ? new Date(Value) : Value;
          },
        );

        return user;
      }
      return null;
    } catch (error) {
      logger.error(error.message, error);
      return null;
    }
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

  async delete(path) {
    logger.info(`removing ${path} from ${S3_BUCKET}`);
    await this.s3.deleteObject({
      Bucket: S3_BUCKET,
      Key: path,
    });
  }

  async getUuidFromEventPayload(data) {
    const json = JSON.parse(data.Body);
    if (json.uuid) return json.uuid;
    return data?.MessageAttributes?.uuid?.StringValue;
  }

  async transcodeVideo({
    originalPath,
    preparedPath,
    video,
    thumbnail,
    options,
  }) {
    const formatDuration = (milliseconds) => {
      const hours = Math.floor(milliseconds / (60 * 60 * 1000));
      const minutes = Math.floor(
        (milliseconds % (60 * 60 * 1000)) / (60 * 1000),
      );
      const seconds = Math.floor((milliseconds % (60 * 1000)) / 1000);
      const millisecondsRemainder = milliseconds % 1000;

      const pad = (value, n = 2, s = "0") => value.toString().padStart(n, s);

      return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(millisecondsRemainder, 3)}`;
    };

    const trimParams = {};
    const { start = "00:00:00.000", end, ...cropParams } = options;
    const dateFormat = "HH:mm:ss.SSS";

    if (video) {
      logger.info(`upload ${video.path} to ${originalPath}`);
      await this.upload(video.path, originalPath);
      logger.info(`transcode ${originalPath} to ${preparedPath}`);
      await fs.promises.unlink(video.path);
    }

    if (start && end) {
      const startTime = dateParse(start, dateFormat, new Date());
      const endTime = dateParse(end, dateFormat, new Date());
      const durationInMilliseconds = differenceInMilliseconds(
        endTime,
        startTime,
      );

      trimParams.start = start;
      trimParams.duration = formatDuration(durationInMilliseconds);
    }

    const transcodeOptions = {
      thumbnail,
      ...cropParams,
      ...trimParams,
    };

    await this.lambdaTranscode(originalPath, preparedPath, transcodeOptions);
  }

  async lambdaTranscode(source, destination, { thumbnail, ...options }) {
    const bucketPath = `s3://${S3_BUCKET}/`;
    const transcodeParams = {
      FunctionName: TRANSCODE_LAMBDA_NAME,
      Payload: JSON.stringify({
        source: `${bucketPath}${source}`,
        destination: `${bucketPath}${destination}`,
        ...(thumbnail && { thumbnail }),
        ...options,
      }),
    };
    logger.info("transcodeParams", transcodeParams);
    const response = await this.lambda.invoke(transcodeParams);
    if (response.FunctionError === "Unhandled") {
      const message = Buffer.from(response.Payload).toString();
      throw new Error(message);
    }
  }

  async lambdaRender(
    inputFile,
    outputPath,
    outputCharacterFile,
    output = ["thumbnail", "gif"],
    emotize = false,
    outputCharacterUD = `s3://${S3_BUCKET}/SamNFT/RPM.json`,
  ) {
    let outputCharacter = outputCharacterFile
      ? {
          outputCharacterFile,
          outputCharacterUD,
        }
      : {
          outputCharacterFile: `s3://${S3_BUCKET}/SamRokoko/samRokoko.fbx`,
          outputCharacterUD: `s3://${S3_BUCKET}/SamRokoko/samRokoko.json`,
        };

    const previewRenderParams = {
      FunctionName: EMOTE_PREVIEW_LAMBDA_NAME,
      Payload: JSON.stringify({
        animFile: inputFile,
        ...outputCharacter,
        outputPath,
        generatedFiles: output,
        camera: "followConstantHeight",
        mode: "ML",
        emotize,
      }),
    };
    logger.info("previewRenderParams", previewRenderParams);

    const response = await this.lambda.invoke(previewRenderParams);
    if (response.FunctionError === "Unhandled") {
      throw new Error(Buffer.from(response.Payload).toString());
    }
    return response;
  }

  async lambdaYCD(sourcePath, destinationPath) {
    const params = {
      FunctionName: "fbx2ycd",
      Payload: JSON.stringify({
        sourcePath,
        destinationPath,
      }),
    };
    logger.info("YCD lambda params", params);

    const promise = await this.lambda.invoke(params);

    if (promise.FunctionError === "Unhandled") {
      throw new Error(Buffer.from(promise.Payload).toString());
    }
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

  async getCognitoUsersFromGroup(groupName) {
    let nextToken = null;
    let allUsers = [];

    do {
      const data = await this.cognito.listUsersInGroup({
        GroupName: groupName,
        UserPoolId: COGNITO_USER_POOL_ID,
        Limit: 20,
        NextToken: nextToken,
      });

      allUsers = allUsers.concat(data.Users.map((user) => user.Username));
      nextToken = data.NextToken;
    } while (nextToken);

    return allUsers;
  }

  async lambdaYoutube({ url, outputPath }) {
    const ytParams = {
      FunctionName: YOUTUBE_DL_LAMBDA_NAME || "yt-downloader",
      Payload: JSON.stringify({ url, outputPath }),
    };
    logger.info("ytParams", ytParams);

    const response = await this.lambda.invoke(ytParams);
    if (response.FunctionError === "Unhandled") {
      const message = Buffer.from(response.Payload).toString();
      if (message.includes("The video is too long")) {
        throw new HttpError(
          null,
          {},
          REQUEST_ENTITY_TOO_LARGE,
          "Video is too long",
          "videoTooLong",
        );
      } else if (message.includes("The video is mature")) {
        throw new HttpError(
          null,
          {},
          NOT_ACCEPTABLE,
          "Video mature are not authorized",
          "videoMature",
        );
      } else if (message.includes("Unsupported URL")) {
        throw new HttpError(
          null,
          {},
          UNPROCESSABLE_ENTITY,
          "Unsupported URL",
          "unsupportedURL",
        );
      } else if (message.toUpperCase().includes("Not found".toUpperCase())) {
        throw new HttpError(null, {}, NOT_FOUND, "Not found", "videoNotFound");
      } else if (message.includes("Bad url")) {
        throw new HttpError(
          null,
          {},
          UNPROCESSABLE_ENTITY,
          "Bad URL",
          "badURL",
        );
      } else if (message.includes("Not an video url")) {
        throw new HttpError(
          null,
          {},
          UNPROCESSABLE_ENTITY,
          "Not an video url",
          "unsupportedURL",
        );
      } else if (message.includes("youtube:truncated_id")) {
        throw new HttpError(
          null,
          {},
          UNPROCESSABLE_ENTITY,
          "Bad URL",
          "badURL",
        );
      } else if (message.includes("time out")) {
        throw new HttpError(
          null,
          {},
          UNPROCESSABLE_ENTITY,
          "Service time out",
          "timeOut",
        );
      } else if (message.includes("Unable to download webpage")) {
        throw new HttpError(
          null,
          {},
          UNPROCESSABLE_ENTITY,
          "Unsupported URL",
          "unsupportedURL",
        );
      } else if (message.includes("please report this issue")) {
        throw new HttpError(
          null,
          {},
          UNPROCESSABLE_ENTITY,
          "An error occured during video extraction",
          "unsupportedURL",
        );
      } else {
        throw new Error(message);
      }
    }
    // FUCKING PYTHON OF SHIT
    return JSON.parse(Buffer.from(response.Payload).toString());
  }

  async lambdaJson2Fbx(inputPath, fbxModel, outputPath) {
    logger.info(`convert ${inputPath} to ${outputPath}`);

    const params = {
      FunctionName: JSON2FBX_LAMBDA_NAME || "json2fbx",
      Payload: JSON.stringify({
        inputPath,
        fbxModel,
        outputPath,
        onlyOneTrack: true,
      }),
    };
    logger.info("json2fbx params", params);

    return this.lambda.invoke(params);
  }

  async lambdaEmoteMeshRemover({
    sourcePath,
    destinationPath,
    unreal = false,
    changeScale = true,
  }) {
    const payload = {
      sourcePath,
      destinationPath,
      unreal,
      scale: changeScale,
    };

    const params = {
      FunctionName: MESH_REMOVER_LAMBDA_NAME || "mesh-remover",
      Payload: JSON.stringify(payload),
    };

    const response = await this.lambda.invoke(params);
    if (response.FunctionError === "Unhandled") {
      throw new Error(Buffer.from(response.Payload).toString());
    }

    return response;
  }

  async lambdaGLB2KIN({ sourcePath, destinationPath, bmPath }) {
    const payload = {
      sourcePath,
      destinationPath,
      bmPath,
    };

    const params = {
      FunctionName: GLB2KINANIM_LAMBDA_NAME || "glb2kin",
      Payload: JSON.stringify(payload),
    };

    const response = await this.lambda.invoke(params);
    if (response.FunctionError === "Unhandled") {
      throw new Error(Buffer.from(response.Payload).toString());
    }

    return response;
  }

  async lambdaRetargetor(
    sourcePath,
    destinationPath,
    targetPath,
    targetConfigPath,
    boneMappingPath,
    sourceConfigPath = `s3://${S3_BUCKET}/retargetor-3000/OutputSkeleton.json`, // SMPL HARDCODED FOR ANIMATION FROM ML
  ) {
    const retargetorParams = {
      FunctionName: RETARGETOR_LAMBDA_NAME || "retargetor",
      Payload: JSON.stringify({
        sourcePath,
        sourceConfigPath,
        targetPath,
        targetConfigPath,
        boneMappingPath,
        destination: destinationPath,
        onlyOneTrack: true, // TELL THE LAMBDA TO KEEP ONLY THE LONGEST ANIMATION STACK SO THE USDZ CONVERTER WILL WORK
      }),
    };
    logger.info("retargetorParams", retargetorParams);

    const response = await this.lambda.invoke(retargetorParams);
    if (response.FunctionError === "Unhandled") {
      throw new Error(Buffer.from(response.Payload).toString());
    }

    return response;
  }

  async getCognitoInternalBlacklist() {
    if (DISABLE_INTERNAL_BLACKLIST === "true") {
      return [];
    }
    return this.getCognitoUsersFromGroup("internals");
  }

  async lambdaExportRender({
    animFile,
    animUD,
    outputPath,
    outputCharacterFile,
    outputCharacterUD,
    fromML = true,
    generatedFiles = ["thumbnail", "gif"],
    emotize = false,
  }) {
    const functionName = EMOTE_PREVIEW_LAMBDA_NAME || "emote-previews-renderer";
    const previewRenderParams = {
      FunctionName: functionName,
      Payload: JSON.stringify({
        animFile,
        animUD,
        outputCharacterFile,
        outputCharacterUD,
        outputPath,
        generatedFiles,
        camera: "followConstantHeight",
        mode: fromML ? "ML" : "nft",
        emotize,
      }),
    };
    logger.info("previewRenderParams", previewRenderParams);

    const response = await this.lambda.invoke(previewRenderParams);
    if (response.FunctionError === "Unhandled") {
      const message = Buffer.from(response.Payload).toString();
      throw new Error(`${functionName}: ${message}`);
    }
  }

  async lambdaEmotize(animationPath, avatarUDPath) {
    logger.info(`emotize ${animationPath}`);
    const emotizeParams = {
      FunctionName: EMOTIZATION_LAMBDA_NAME || "kinetix-emotization",
      Payload: JSON.stringify({
        animationPath,
        avatarUDPath,
        outputPath: animationPath, // WILL OVERWRITE ORIGINAL FILE
      }),
    };

    logger.info("emotizeParams", emotizeParams);

    const response = await this.lambda.invoke(emotizeParams);
    if (response.FunctionError === "Unhandled") {
      const message = Buffer.from(response.Payload).toString();
      throw new Error(message);
    }
  }

  async lambdaModeration(animationPath) {
    logger.info(`moderation ${animationPath}`);
    const moderationParam = {
      FunctionName: MODERATOR_LAMBDA_NAME || "moderator",
      Payload: JSON.stringify({
        inputPath: animationPath,
      }),
    };

    logger.info("moderationParam", moderationParam);

    const response = await this.lambda.invoke(moderationParam);
    if (response.FunctionError === "Unhandled") {
      const message = Buffer.from(response.Payload).toString();
      throw new Error(message);
    }
    return JSON.parse(Buffer.from(response.Payload).toString());
  }

  async archiveFilesStream(name, files, rawKey = false, res) {
    const archive = archiver("zip", { zlib: { level: 5 } });
    let responses = [];
    res.on("close", () => {
      responses.forEach((r) => {
        r.Body.destroy();
      });
    });

    const appendS3 = async (k, filename) => {
      try {
        const response = await this.s3.getObject({
          Bucket: S3_BUCKET,
          Key: k,
        });
        responses.push(response);

        const fName = filename || k.split("/")[k.split("/").length - 1];
        archive.append(response.Body, { name: fName });
      } catch {
        logger.warn(`Errors export: cannot download ${k}`);
      }
    };

    await Promise.all(
      files.map(({ key, filename, data }) => {
        if (data && !key && filename) {
          archive.append(data, { name: filename });
        } else {
          return appendS3(`${!rawKey ? "user-data/" : ""}${key}`, filename);
        }
        return null;
      }),
    );

    return archive;
  }

  async copyFile(srcS3Path, destS3Path) {
    const params = {
      Bucket: S3_BUCKET,
      Key: destS3Path,
    };

    try {
      await this.s3.headObject(params);
      await this.s3.deleteObject(params);
    } catch (error) {
      if (error.name !== "NotFound") throw error;
    }

    await this.s3.copyObject({
      ...params,
      CopySource: `/${S3_BUCKET}/${srcS3Path}`,
    });
  }
}

export default new AWSService();
