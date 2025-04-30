var express = require('express');
var router = express.Router();

// Stock Indices data
const stockIndices = {
  nasdaq: {
    current: 16789.45,
    previous: 16750.22,
    change: 0.23,
    history: [16720.45, 16740.32, 16760.78, 16730.56, 16750.22, 16789.45],
    label: "NASDAQ Composite"
  },
  sp500: {
    current: 5234.67,
    previous: 5210.34,
    change: 0.47,
    history: [5180.23, 5195.67, 5205.34, 5190.45, 5210.34, 5234.67],
    label: "S&P 500"
  },
  dowJones: {
    current: 38976.34,
    previous: 38900.12,
    change: 0.20,
    history: [38850.45, 38870.23, 38920.67, 38880.34, 38900.12, 38976.34],
    label: "Dow Jones Industrial Average"
  },
  russell2000: {
    current: 2123.45,
    previous: 2098.76,
    change: 1.18,
    history: [2080.34, 2085.67, 2090.23, 2095.45, 2098.76, 2123.45],
    label: "Russell 2000"
  }
};

/**
 * @swagger
 * /stockIndices:
 *   get:
 *     summary: Get stock indices data
 *     description: Returns data for major stock indices including current values, previous values, percentage changes, and historical data
 *     tags: [Stock Indices]
 *     responses:
 *       200:
 *         description: Stock indices data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nasdaq:
 *                   type: object
 *                   properties:
 *                     current:
 *                       type: number
 *                       description: Current value of the index
 *                     previous:
 *                       type: number
 *                       description: Previous value of the index
 *                     change:
 *                       type: number
 *                       description: Percentage change from previous value
 *                     history:
 *                       type: array
 *                       items:
 *                         type: number
 *                       description: Historical values for the last 6 days
 *                     label:
 *                       type: string
 *                       description: Display name of the index
 *                 sp500:
 *                   $ref: '#/components/schemas/StockIndex'
 *                 dowJones:
 *                   $ref: '#/components/schemas/StockIndex'
 *                 russell2000:
 *                   $ref: '#/components/schemas/StockIndex'
 */
router.get('/', function (req, res, next) {
  res.json(stockIndices);
});

module.exports = router;
