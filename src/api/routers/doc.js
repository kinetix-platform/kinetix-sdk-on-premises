 

/** 
 * 
 * @swagger
 *components:
 *  schemas:
 *   UserEmote:
 *     type: "object"
 *     properties:
 *       id:
 *        type: "string"
 *       emoteUuid:
 *        type: "string"
 *        format: "uuid"
 *       userId:
 *        type: "number"
 *       createdAt:
 *         type: "string"
 *         format: date-time
 *       data:
 *         $ref: '{{BACKEND_URL}}#/definitions/Asset'
 *
 *   Key:
 *     type: "object"
 *     properties:
 *       canRead:
 *        type: "boolean"
 *       canWrite:
 *        type: "boolean"
 *       expire:
 *        type: "string"
 *        format: "date-time"
 *       value:
 *        type: "string"
 *
 *   User:
 *     type: "object"
 *     properties:
 *       id:
 *        type: "integer"
 *       virtualWorldId:
 *        type: "integer"
 *       createdAt:
 *        type: "string"
 *        format: "date-time"
 *
 *   UserEmotes:
 *     type: "array"
 *     items:
 *       $ref: '#/components/schemas/UserEmote'
 *
 *   VirtualWorldEmote:
 *     type: "object"
 *     properties:
 *       id:
 *        type: "string"
 *       userId:
 *        type: "number"
 *       virtualWorldId:
 *        type: "number"
 *       createdAt:
 *         type: "string"
 *         format: date-time
 *
 *   VirtualWorldEmotes:
 *     type: "array"
 *     items:
 *       $ref: '#/components/schemas/VirtualWorldEmote'
 *
 *   InternalError:
 *     type: "object"
 *     properties:
 *       message:
 *        type: "string"
 *        example: "An error occured."
 *       data:
 *         type: "object"
 *
 *   NotFoundError:
 *     type: object
 *     properties:
 *       data:
 *         type: object
 *       message:
 *         type: string
 *         example: "{resourceName} not found"
 *       errorCode:
 *         type: string
 *         example: "notFound"
 *
 *   ForbiddenError:
 *     type: object
 *     properties:
 *       errorCode:
 *         type: string
 *         example: "expiredApiKey"
 *       data:
 *         type: object
 *       message:
 *         type: string
 *         example: "Expired API key"
 *
 *   BadRequestError:
 *     type: object
 *     properties:
 *       errorCode:
 *         type: "string"
 *         example: "badRequest"
 *       details:
 *         type: "string"
 *         example: "\"body.email\" must be a valid email, \"body.password\" is required, \"body.pass\" is not allowed"
 *       message:
 *         type: string
 *         example: "malformed request"
 *
 *   UnauthorizedError:
 *     type: object
 *     properties:
 *       errorCode:
 *         type: string
 *         example: "Missing API key"
 *       data:
 *         type: object
 *       message:
 *         type: string
 *         example: "Missing API key"
 * 
 *   NotAcceptableError:
 *     type: object
 *     properties:
 *       data:
 *         type: object
 *       message:
 *         type: string
 *         example: "Video mature are not authorized"
 * 
 *   PayloadTooLargeError:
 *     type: object
 *     properties:
 *       data:
 *         type: object
 *       message:
 *         type: string
 *         example: "Video is too long"
 * 
 *   PreconditionRequiredError:
 *     type: object
 *     properties:
 *       data:
 *         type: object
 *       message:
 *         type: string
 *         example: "You need to setup the interval & startDate for alias1"
 * 
 *   TooManyRequestsError:
 *     type: object
 *     properties:
 *       data:
 *         type: object
 *       message:
 *         type: string
 *         example: "You have exceeded the 2000 requests in 1 minutes limit!"
 * 
 */