import { S3_CLIENT } from "#common/config/constants.js";
import logger from "../helpers/logger.js";
import AWSS3Service from "./aws.js";
import MinioS3Service from "./minio.js";
import FSS3Service from "./fs.js";

const initClient = () => {
    let client;

    switch (S3_CLIENT) {
        case 'aws':
            client = new AWSS3Service();   
            break;
        case 'minio':
            client = new MinioS3Service();
            break;
        default:
            client = new FSS3Service();
            break;
    }

    return client;
}

const service = initClient();
logger.info(`S3 ${S3_CLIENT} initialized`);

export default service;