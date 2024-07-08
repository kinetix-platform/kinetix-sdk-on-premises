import logger from '#common/services/logger.js';

const allowedHeaders = [
  'host',
  'origin',
  'referer',
  'authorization',
  'x-api-key',
  'x-api-token',
  'x-version',
  'user-agent',
  'accept-language',
  'accept-encoding',
  'accept'
];

const allowedHeaderParts = [
  'ecs_',
  'x-amz',
  'x-forwarded-',
  'cloudfront-'
]

const isHeaderAllowed = (header) => {
  return allowedHeaders.includes(header) || allowedHeaderParts.some(h => header.includes(h))
}

const filterHeaders = (headers) => {
  return Object.entries(headers).reduce((acc, [key, value]) => {
    if (isHeaderAllowed(key)) {
      acc[key] = value;
    }
    return acc;
  }, {})
}


export default async (req, res, next) => {
  const start = Date.now();
  res.once('finish', () => {
    const duration = Date.now() - start;
    const {
      headers, body, query, originalUrl, ip, method, user, vw
    } = req;
    const { error } = res;
    const { statusCode: status } = res;
    const contentLength = req.get('content-length');
    const requestData = {
      headers: filterHeaders(headers),
      body,
      query,
      originalUrl,
      method,
      ip,
      status,
      duration,
      contentLength,
      userCognitoUuid: user?.username || vw?.cognitoUuid,
      vw: {
        uuid: vw?.uuid,
        name: vw?.name
      },
      key: headers['x-api-key'] || vw?.key,
    };
    if (error && status !== 400) {
      requestData.error = error;
      logger.error('', requestData);
    } else {
      if (status === 400) {
        requestData.body = {}
        requestData.query = {}
        requestData.error = res.error
      }
      logger.http('', requestData);
    }
  });
  return next();
};
