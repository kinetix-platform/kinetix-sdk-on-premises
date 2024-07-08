import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';
import path from 'path';
import fs from 'fs';


const packageJson = JSON.parse(fs.readFileSync('./package.json'));

const { version } = packageJson;
const { KINETIX_BACKEND, PORT, COGNITO_CLIENT_ID } = process.env;
const router = express.Router();

const servers = [
  { url: `http://localhost:${PORT}/` },
]

const includeOauth = false;
const oauthSecurity = includeOauth ? {
  oauth: {
    type: 'oauth2',
    description: 'This API uses OAuth 2 with the implicit grant flow.',
    flows: {
      implicit: {
        authorizationUrl: 'https://auth.kinetix.tech/login',
      }
    }
  },
} : {};

const description = fs.readFileSync(path.resolve('./src/api/routers/docDescription.html')).toString();

const swaggerDefinition = {
  openapi: '3.0.3',
  info: {
    title: 'Kinetix SDK API',
    version: version,
    description,
  },
  servers,
  basePath: '/',
  components: {
    securitySchemes: {
      ...oauthSecurity,
      read: {
        type: 'apiKey',
        in: 'header',
        name: 'x-api-key',
      },
      write: {
        type: 'apiKey',
        in: 'header',
        name: 'x-api-key',
      },
      token: {
        type: 'apiKey',
        in: 'header',
        name: 'x-api-token',
      },
    },
  },
  tags: {
    name: 'auth',
    description: 'API Key auth',
  },
};

const dir = path.join(path.resolve(), 'src');
const options = {
  swaggerDefinition,
  apis: [`${dir}/**/doc.js`],
};

const swaggerSpec = swaggerJSDoc(options);

const fullSwaggerSpec = JSON.parse(
  JSON.stringify(swaggerSpec)
    .replaceAll(
      '{{BACKEND_URL}}',
      `${KINETIX_BACKEND}/api/swagger.json`
    )
);

router.use('/documentation', swaggerUi.serve, swaggerUi.setup(fullSwaggerSpec,  {
  swaggerOptions: {
    oauth: {
      clientId: COGNITO_CLIENT_ID
    }
  },
}));
router.get('/swagger.json', (req, res) => {
  res.json(fullSwaggerSpec);
});

export default router;
