var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get home page
 *     description: Renders the home page of the application
 *     tags: [Home]
 *     responses:
 *       200:
 *         description: HTML content of the home page
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

module.exports = router;
