var express = require('express');
var router = express.Router();

// Time labels for charts (last 6 days)
const timeLabels = [
  "Mon", "Tue", "Wed", "Thu", "Fri", "Today"
];

/**
 * @swagger
 * /timeLabels:
 *   get:
 *     summary: Get time labels for charts
 *     description: Returns an array of day labels for the last 6 days
 *     tags: [Time Labels]
 *     responses:
 *       200:
 *         description: A list of time labels
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *               example: ["Mon", "Tue", "Wed", "Thu", "Fri", "Today"]
 */
router.get('/', function (req, res, next) {
  res.json(timeLabels);
});

module.exports = router;
