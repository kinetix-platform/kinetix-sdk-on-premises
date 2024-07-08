/**
 * @swagger
 *
 *
 * paths:
 *   /v1/emotes/{uuid}:
 *     get:
 *       summary: Get Kinetix emote
 *       tags:
 *         - /emotes
 *       description: Get the inform
 *       parameters:
 *         - in: path
 *           name: uuid
 *           description: Emote uuid
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
 *        404:
 *          description: Not Found
 *          content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/NotFoundError'
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '{{BACKEND_URL}}#/definitions/Asset'
 *
 *   /v1/emotes/{uuid}/avatar/{avatarUuid}:
 *     get:
 *       summary: Get Kinetix emote with specific avatar
 *       tags:
 *         - /emotes
 *       description: Get the inform
 *       parameters:
 *         - in: path
 *           name: uuid
 *           description: Emote uuid
 *         - in: path
 *           name: avatarUuid
 *           description: Avatar uuid
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
 *        404:
 *          description: Not Found
 *          content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/NotFoundError'
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: "object"
 *                properties:
 *                  id:
 *                   type: "integer"
 *                   example: 123
 *                  uuid:
 *                   type: "string"
 *                   format: "uuid"
 *                  name:
 *                   type: "string"
 *                   example: "Greatest emote"
 *                  type:
 *                   type: "string"
 *                   example: "emote"
 *                  source:
 *                   type: "string"
 *                   example: "sdk"
 *                  createdAt:
 *                    type: "string"
 *                    format: date-time
 *                  defaultThumbnailGifUrl:
 *                   type: "string"
 *                   format: "uri"
 *                   example: "https://storage.kinetix.tech/user-data/ec3b1de1-5412-4590-9bbb-00268fc649d1-thumbnail.gif"
 *                  defaultThumbnailPngUrl:
 *                   type: "string"
 *                   format: "uri"
 *                   example: "https://storage.kinetix.tech/user-data/ec3b1de1-5412-4590-9bbb-00268fc649d1-thumbnail.png"
 *                  thumbnailGifUrl:
 *                   type: "string"
 *                   format: "uri"
 *                   example: "https://storage.kinetix.tech/user-data/ec3b1de1-5412-4590-9bbb-00268fc649d1-thumbnail-3c7ee50f-6ff8-4cf6-9430-f11248031e76.gif"
 *                  thumbnailPngUrl:
 *                   type: "string"
 *                   format: "uri"
 *                   example: "https://storage.kinetix.tech/user-data/ec3b1de1-5412-4590-9bbb-00268fc649d1-thumbnail-3c7ee50f-6ff8-4cf6-9430-f11248031e76.png"
 *                  animationFbxUrl:
 *                   type: "string"
 *                   format: "uri"
 *                   example: "https://storage.kinetix.tech/user-data/ec3b1de1-5412-4590-9bbb-00268fc649d1-animation-3c7ee50f-6ff8-4cf6-9430-f11248031e76.fbx"
 *                  animationGlbUrl:
 *                   type: "string"
 *                   format: "uri"
 *                   example: "https://storage.kinetix.tech/user-data/ec3b1de1-5412-4590-9bbb-00268fc649d1-animation-3c7ee50f-6ff8-4cf6-9430-f11248031e76.glb"
 *                  animationKinanimUrl:
 *                   type: "string"
 *                   format: "uri"
 *                   example: "https://storage.kinetix.tech/user-data/ec3b1de1-5412-4590-9bbb-00268fc649d1-animation-3c7ee50f-6ff8-4cf6-9430-f11248031e76.kinanim"
 *
 *   /v1/emotes/search:
 *     get:
 *       summary: Search Kinetix emotes like G*f! style
 *       deprecated: true
 *       tags:
 *         - /emotes
 *       description: Get the emotes
 *       parameters:
 *         - in: query
 *           name: q
 *           description: Text to query
 *         - in: query
 *           name: size
 *           description: Max number of items to search, default 4
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
 *          content:
 *            application/json:
 *              schema:
 *                type: "array"
 *                items:
 *                  $ref: '{{BACKEND_URL}}#/definitions/Asset'
 *
 *   /v1/emotes/categories:
 *     get:
 *       summary: Fetch Kinetix emotes categories
 *       deprecated: true
 *       tags:
 *         - /emotes
 *       description: Get the categories
 *       parameters:
 *         - in: query
 *           name: includeSubCategories
 *           description: include sub categories
 *           schema:
 *              type: boolean
 *              default: false
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
 *          content:
 *            application/json:
 *              schema:
 *                type: "array"
 *                items:
 *                  $ref: '{{BACKEND_URL}}#/definitions/Category'
 */
