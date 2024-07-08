/**
 * @swagger
 *
 * paths:
 *   /v1/plans:
 *     get:
 *       summary: Get Kinetix plans
 *       tags:
 *         - /plans
 *       description: Get the different Kinetix plans
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
 *                  $ref: '#/components/schemas/Plan'
 *
 */
