/**
 * @swagger
 *
 * components:
 *   schemas:
 *
 *     ProcessChild:
 *      type: "object"
 *      properties:
 *       uuid:
 *         type: string
 *         format: "uuid"
 *       child:
 *         type: "object"
 *         $ref: '#/components/schemas/ProcessChild'
 *
 *     ProcessParent:
 *      type: "object"
 *      properties:
 *       uuid:
 *         type: string
 *         format: "uuid"
 *       child:
 *         type: "object"
 *         $ref: '#/components/schemas/ProcessParent'
 *
 *     ProcessHierarchy:
 *      type: "object"
 *      properties:
 *        parents:
 *          type: integer
 *        children:
 *          type: integer
 *        child:
 *          $ref: '#/components/schemas/ProcessChild'
 *        parent:
 *          $ref: '#/components/schemas/ProcessParent'
 *
 *     PipelineProcess:
 *       type: "object"
 *       properties:
 *         uuid:
 *           type: string
 *           format: "uuid"
 *         emote:
 *           type: string
 *           format: "uuid"
 *         animation:
 *           type: string
 *           format: "uuid"
 *         video:
 *           type: string
 *           format: "uuid"
 *         step:
 *           type: string
 *         vw:
 *           type: integer
 *         user:
 *           type: integer
 *         createdAt:
 *           type: string
 *           format: "date-time"
 *
 *     TokenResponse:
 *       type: 'object'
 *       properties:
 *         uuid:
 *           type: 'string'
 *         url:
 *           type: string
 *         expire:
 *           type: string
 *           format: 'date-time'
 *
 *     GetTokenResponse:
 *       type: 'object'
 *       properties:
 *         ttl:
 *           type: number
 *         expire:
 *           type: string
 *           format: 'date-time'
 *
 * paths:
 *   /v1/process/{uuid}:
 *     get:
 *       summary: Get process status
 *       tags:
 *         - /process
 *       description: Get an user process status. The user must be associated to requesting virtual world
 *       parameters:
 *         - in: path
 *           name: uuid
 *           description: The process uuid returned by the POST /v1/process route.
 *       security:
 *         - read: []
 *       responses:
 *        401:
 *          description: Unauthorized
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UnauthorizedError'
 *        403:
 *          description: Forbidden
 *          content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ForbiddenError'
 *        200:
 *          description: Success
 *          content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/PipelineProcessV2'
 *
 *   /v1/process/{uuid}/validate:
 *     post:
 *       summary: Validate the process
 *       tags:
 *         - /process
 *       description: When the validation flow is activated, this will make emote available to the user
 *       parameters:
 *         - in: path
 *           name: uuid
 *           description: The process uuid returned by the POST /v1/process route.
 *       security:
 *         - read: []
 *       responses:
 *        401:
 *          description: Unauthorized
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UnauthorizedError'
 *        403:
 *          description: Forbidden
 *          content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ForbiddenError'
 *        200:
 *          description: Success
 *          content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/PipelineProcess'
 *
 *   /v1/process/{uuid}/retake:
 *     post:
 *       summary: Reject the process
 *       tags:
 *         - /process
 *       description: When the validation flow is activated, this will reject the process and return a new generation token to let the user retry
 *       parameters:
 *         - in: path
 *           name: uuid
 *           description: The process uuid returned by the POST /v1/process route.
 *       security:
 *         - read: []
 *       responses:
 *        401:
 *          description: Unauthorized
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UnauthorizedError'
 *        403:
 *          description: Forbidden
 *          content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ForbiddenError'
 *        200:
 *          description: Success
 *          content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/PipelineProcess'
 *
 *   /v1/process/token:
 *     get:
 *       summary: Generate token
 *       tags:
 *         - /process
 *       description: Get a token to authenticate a process creation
 *       parameters:
 *         - in: query
 *           name: userId
 *           description: Virtual world's user ID.
 *       security:
 *         - write: []
 *       responses:
 *        401:
 *          description: Unauthorized
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UnauthorizedError'
 *        403:
 *          description: Forbidden
 *          content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ForbiddenError'
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/TokenResponse'
 *
 *   /v1/process/token/{token}:
 *     get:
 *       summary: Get token status
 *       tags:
 *         - /process
 *       description: Get the state of a token. On success return the expiration time, on error means token was used or never existed
 *       parameters:
 *         - in: path
 *           name: token
 *           description: The token.
 *       security:
 *         - read: []
 *       responses:
 *        401:
 *          description: Unauthorized
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UnauthorizedError'
 *        404:
 *          description: Forbidden
 *          content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/NotFoundError'
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/GetTokenResponse"
 *
 *   /v1/process/dev-token:
 *     get:
 *       summary: Generate dev token QR code.
 *       tags:
 *         - /process
 *       description: Create a QR code for the specified user. By default, it will use the virtual world id 1. Virtual World can be changed by specifying one of it's key
 *       parameters:
 *         - in: query
 *           name: userId
 *           description: Virtual world's user ID.
 *         - in: query
 *           name: key
 *           description: (optionnal) Virtual world's key.
 *       security:
 *         - read: []
 *       produces:
 *        - image/png
 *       responses:
 *         '200':
 *           description: a QR code
 *           content:
 *             image/png:
 *               type: "file"
 *   /v1/process:
 *     post:
 *       summary: Create ML process
 *       tags:
 *         - /process
 *       description: Create a ML pipeline for web2 sdk ugc with a one time token
 *       consumes:
 *         - multipart/form-data
 *       requestBody:
 *         content:
 *           multipart/form-data:
 *             schema:
 *               type: object
 *               required:
 *                 - mature
 *                 - name
 *               properties:
 *                 mature:
 *                   type: boolean
 *                   description: If the content is for adults only
 *                   default: false
 *                   required: true
 *                 name:
 *                   type: string
 *                   description: Name of the emote to create
 *                 start:
 *                   type: string
 *                   format: "time"
 *                   example: "00:00:00.000"
 *                   description: Start time of video
 *                 end:
 *                   type: string
 *                   example: "00:00:02.000"
 *                   format: "time"
 *                   description: End time of video
 *                 x:
 *                   type: integer
 *                   description: The horizontal position, in the input video, of the left edge of the output video
 *                 y:
 *                   type: integer
 *                   description: The vertical position, in the input video, of the top edge of the output video
 *                 outputHeight:
 *                   type: integer
 *                   description: The height of the output video
 *                 outputWidth:
 *                   type: integer
 *                   description: The width of the output video
 *                 video:
 *                   type: string
 *                   format: binary
 *                   description: The video to create emote from
 *       security:
 *         - token: []
 *       responses:
 *        401:
 *          description: Unauthorized
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UnauthorizedError'
 *        403:
 *          description: Forbidden
 *          content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ForbiddenError'
 *        201:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/PipelineProcess"
 *
 *
 */
