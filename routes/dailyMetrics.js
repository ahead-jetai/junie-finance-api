var express = require('express');
var router = express.Router();

// Daily Banking Metrics data
const dailyMetrics = {
  deposits: {
    current: 12567890,
    previous: 12345678,
    change: 1.80,
    history: [12100000, 12200000, 12300000, 12345678, 12567890],
    label: "Daily Deposits"
  },
  withdrawals: {
    current: 10234567,
    previous: 10123456,
    change: 1.10,
    history: [9900000, 10000000, 10050000, 10123456, 10234567],
    label: "Daily Withdrawals"
  },
  profit: {
    current: 2333323,
    previous: 2222222,
    change: 5.00,
    history: [2100000, 2150000, 2200000, 2222222, 2333323],
    label: "Day Over Day Profit"
  },
  transactions: {
    current: 567890,
    previous: 545678,
    change: 4.07,
    history: [520000, 530000, 540000, 545678, 567890],
    label: "Total Transactions"
  }
};

/**
 * @swagger
 * /dailyMetrics:
 *   get:
 *     summary: Get daily banking metrics
 *     description: Returns daily banking metrics including deposits, withdrawals, profit, and transactions
 *     tags: [Daily Metrics]
 *     responses:
 *       200:
 *         description: Daily banking metrics data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 deposits:
 *                   $ref: '#/components/schemas/BankingMetric'
 *                 withdrawals:
 *                   $ref: '#/components/schemas/BankingMetric'
 *                 profit:
 *                   $ref: '#/components/schemas/BankingMetric'
 *                 transactions:
 *                   $ref: '#/components/schemas/BankingMetric'
 */
router.get('/', function(req, res, next) {
  res.json(dailyMetrics);
});

module.exports = router;
