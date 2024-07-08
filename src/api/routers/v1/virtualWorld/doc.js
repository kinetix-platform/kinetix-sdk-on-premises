/**
 * @swagger
 *
 *components:
 *  schemas:
 *    Plan:
 *      type: "object"
 *      properties:
 *        name:
 *          type: "string"
 *        mugeLimit:
 *          type: "number"
 *        totalUsersLimit:
 *          type: "number"
 *        callsLimit:
 *          type: "number"
 *        createdAt:
 *          type: "string"
 *          format: date-time
 *
 *    Usage:
 *      type: "object"
 *      properties:
 *        uge:
 *          type: "number"
 *        users:
 *          type: "number"
 *        calls:
 *          type: "number"
 *        periodStart:
 *          type: "string"
 *          format: date-time
 *
 *    VirtualWorld:
 *      type: "object"
 *      properties:
 *        id:
 *          type: "number"
 *        virtual_world_id:
 *          type: "string"
 *        plan:
 *          $ref: '#/components/schemas/Plan'
 *        createdAt:
 *          type: "string"
 *          format: date-time
 *
 *    NewEmotesResponse:
 *      type: "object"
 *      properties:
 *        status:
 *          type: string
 *          example: ""
 *        data:
 *          type: "object"
 *          properties:
 *            failed:
 *              $ref: '{{BACKEND_URL}}#/definitions/Asset'
 *
 *    VirtualWorldResponse:
 *      type: "object"
 *      properties:
 *        message:
 *          type: string
 *          example: ""
 *        data:
 *          $ref: '#/components/schemas/User'
 *
 *    AddEmoteBody:
 *      type: "object"
 *      properties:
 *        uuids:
 *          type: "array"
 *          items:
 *            type: "string"
 *          example: ["uuid1", "uuid2"]
 *
 *paths:
 *  /v1/virtual-world/config:
 *    put:
 *      summary: Update a virtual world configuration
 *      tags:
 *        - /virtual-world
 *      description: Update a virtual world configuration
 *      requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               website:
 *                 type: string
 *               webhookUri:
 *                 type: string
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
 *                $ref: '#/components/schemas/VirtualWorldResponse'
 *    get:
 *      summary: Get a virtual world configuration
 *      tags:
 *        - /virtual-world
 *      description: Get a virtual world configuration
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
 *                $ref: '#/components/schemas/VirtualWorldResponse'
 *
 *  /v1/virtual-world/emotes:
 *    post:
 *      deprecated: true
 *      summary: Associate emotes to virtual world
 *      tags:
 *        - /virtual-world/emotes
 *      description: Batch associate emotes to virtual world
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AddEmoteBody'
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
 *                $ref: '#/components/schemas/NewEmotesResponse'
 *
 *    get:
 *      deprecated: true
 *      summary: List virtual world's emotes
 *      tags:
 *        - /virtual-world/emotes
 *      description: List a virtual world accepted emotes.
 *      parameters:
 *      - in: query
 *        name: mature
 *        type: "boolean"
 *        description: Optional filter for mature content. Non flagged emotes are returned as false
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
 *  /v1/virtual-world/users:
 *    post:
 *      summary: Create user
 *      tags:
 *        - /virtual-world/users
 *      description: Create a user from virtual world's user id
 *      requestBody:
 *         content:
 *           application/json:
 *             schema:
 *                type: "object"
 *                properties:
 *                  id:
 *                    type: string
 *                    example: "myUserId123"
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
 *                $ref: '#/components/schemas/VirtualWorldResponse'
 *
 * /v1/virtual-world/users/{userId}:
 *    get:
 *      summary: Fetch an user
 *      tags:
 *        - /virtual-world/users
 *      description: Find a user from the calling virtual world
 *      parameters:
 *      - in: path
 *        name: userId
 *        description: User ID from virtual world
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
 *        404:
 *          description: Not Found
 *          schema:
 *            $ref: '#/components/schemas/NotFoundError'
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 *
 * /v1/virtual-world/alias/{name}:
 *    get:
 *      summary: Get an emote by alias
 *      deprecated: true 
 *      tags:
 *        - /virtual-world/emotes
 *      description: Create an alias in the portal and retrieve the emote associated with the requested alias here
 *      parameters:
 *      - in: path
 *        name: name
 *        description: Alias name
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
 *                $ref: '{{BACKEND_URL}}#/definitions/Asset'
 */
