/**
 * @swagger
 *
 *components:
 *  schemas:
 *    PipelineProcessV2:
 *      type: "object"
 *      properties:
 *        uuid:
 *          type: string
 *          format: "uuid"
 *        emote:
 *          type: string
 *          format: "uuid"
 *        animation:
 *          type: string
 *          format: "uuid"
 *        video:
 *          type: string
 *          format: "uuid"
 *        step:
 *          type: string
 *        vw:
 *          type: integer
 *        user:
 *          type: integer
 *        progression:
 *          type: integer
 *        name:
 *          type: string
 *        createdAt:
 *          type: string
 *          format: "date-time"
 *        validated:
 *          type: boolean
 *        rejected:
 *          type: boolean
 *        ml:
 *         $ref: '#/components/schemas/MLProgression'
 *        hierarchy:
 *         $ref: '#/components/schemas/ProcessHierarchy'
 *      example:
 *       uuid: '00000000-0000-0000-0000-000000000000'
 *       emote: '00000001-0001-0001-0001-000000000001'
 *       animation: '00000002-0002-0002-0002-000000000002'
 *       video: '00000003-0003-0003-0003-000000000003'
 *       vw: 123
 *       user: 12345
 *       progression: 100
 *       createdAt: '2023-01-01T12:12:30Z'
 *       name: foo
 *       validated: false
 *       rejected: true
 *       hierarchy:
 *         children: 2
 *         child:
 *           uuid: 'uuid1'
 *           child:
 *             uuid: 'uuid2'
 *             child: null
 *         parents: 0
 *         parent: null
 *
 *
 *paths:
 *  /v2/users/{userId}/processes:
 *    get:
 *      summary: List user processes
 *      tags:
 *        - /users
 *      description: List all the ongoing user processes. The user must be associated to requesting virtual world
 *      parameters:
 *      - in: path
 *        name: userId
 *        description: Virtual world's user ID.
 *        required: true
 *      - in: query
 *        name: pending
 *        type: "boolean"
 *        description: Filter by status pending
 *        required: false
 *        schema:
 *          type: string
 *          enum:
 *            - true
 *            - false
 *      - in: query
 *        name: processing
 *        type: boolean
 *        description: Filter by status processing
 *        required: false
 *        schema:
 *          type: string
 *          enum:
 *            - true
 *            - false
 *      - in: query
 *        name: done
 *        type: "boolean"
 *        description: Filter by status done
 *        required: false
 *        schema:
 *          type: string
 *          enum:
 *            - true
 *            - false
 *      - in: query
 *        name: failed
 *        type: "boolean"
 *        description: Filter by status failed
 *        required: false
 *        schema:
 *          type: string
 *          enum:
 *            - true
 *            - false
 *      - in: query
 *        name: validated
 *        type: "boolean"
 *        description: Filter by status validated
 *        required: false
 *        schema:
 *          type: string
 *          enum:
 *            - true
 *            - false
 *      - in: query
 *        name: rejected
 *        type: "boolean"
 *        description: Filter by status rejected
 *        required: false
 *        schema:
 *          type: string
 *          enum:
 *            - true
 *            - false
 *      - in: query
 *        name: since
 *        type: "string"
 *        format: date-time
 *        example: '2023-01-01T12:12:30Z'
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
 *                  $ref: '#/components/schemas/PipelineProcessV2'
 *
 */