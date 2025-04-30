var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get users listing
 *     description: Returns a sample response for users endpoint
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A sample text response
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: respond with a resource
 */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
