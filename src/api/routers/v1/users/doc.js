/**
 * @swagger
 *
 *components:
 *  schemas:
 *    User:
 *      type: "object"
 *      properties:
 *        id:
 *          type: "number"
 *        virtual_world_id:
 *          type: "string"
 *        createdAt:
 *          type: "string"
 *          format: date-time
 *
 *    UserResponse:
 *      type: "object"
 *      properties:
 *        message:
 *          type: string
 *          example: ""
 *        data:
 *          $ref: '#/components/schemas/User'
 *
 *paths:
 *  /v1/users/{userId}/emotes:
 *    get:
 *      summary: List user emotes
 *      tags:
 *        - /users
 *      description: List all the user emotes. The user must be associated to requesting virtual world
 *      parameters:
 *      - in: path
 *        name: userId
 *        description: Virtual world's user ID.
 *      - in: query
 *        name: mature
 *        type: "boolean"
 *        description: Optional filter for mature content. Non flagged emotes are returned as false
 *      - in: query
 *        name: limit
 *        type: "number"
 *        description: Optional pagination parameter
 *      - in: query
 *        name: offset
 *        type: "number"
 *        description: Optional pagination parameter
 *      - in: query
 *        name: since
 *        type: "string"
 *        format: date-time
 *        example: '2023-01-01T12:12:30Z'
 *        description: Filter by creation date
 *        required: false
 *      - in: query
 *        name: until
 *        type: "string"
 *        format: date-time
 *        example: '2024-01-01T12:12:30Z'
 *        description: Filter by creation date
 *        required: false
 *      security:
 *        - read: []
 *      responses:
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
 *                  $ref: '#/components/schemas/UserEmote'
 *
 * /v1/users/{userId}/processes:
 *    get:
 *      summary: List user processes
 *      deprecated: true
 *      tags:
 *        - /users
 *      description: List all the ongoing user processes. The user must be associated to requesting virtual world
 *      parameters:
 *      - in: path
 *        name: userId
 *        description: Virtual world's user ID.
 *      - in: query
 *        name: ongoingOnly
 *        type: "boolean"
 *        description: Optional to filter out done or failed processes. Default to true
 *      security:
 *        - read: []
 *      responses:
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
 *                  $ref: '#/components/schemas/PipelineProcess'
 *
 * /v1/users/{userId}/emotes/{emoteUuid}:
 *    post:
 *      summary: Associate emote to user
 *      deprecated: true
 *      tags:
 *        - /users
 *      description: Associate an emote to a user. The emote must be associated to requesting virtual world
 *      parameters:
 *      - in: path
 *        name: userId
 *        description: Virtual world's user ID.
 *      - in: path
 *        name: emoteUuid
 *        description: Kinetix Emote unique identifier
 *      security:
 *        - write: []
 *      responses:
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
 *    delete:
 *      summary: Remove emote from a user
 *      tags:
 *        - /users
 *      description: Remove an emote from a user
 *      parameters:
 *      - in: path
 *        name: userId
 *        description: Virtual world's user ID.
 *      - in: path
 *        name: emoteUuid
 *        description: Kinetix Emote unique identifier
 *      security:
 *        - write: []
 *      responses:
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
 */
