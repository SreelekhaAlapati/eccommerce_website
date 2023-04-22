/**
 * @swagger
 * /datacheck:
 *  post:
 *    summary: used to insert data to mongodb
 *    description: This API is used to post records to MongoDB
 *    requestBody:
 *        required: true
 *        content:
 *            application/json:
 *                schema:
 *                    $ref:'#components/schema/Messages'
 *    responses:
 *      '200':
 *        description: Added Successfully
 */
