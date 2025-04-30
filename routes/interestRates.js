var express = require('express');
var router = express.Router();

// Interest Rates data
const interestRates = {
  mortgage: {
    current: 6.75,
    previous: 6.82,
    change: -0.07,
    history: [6.95, 6.90, 6.87, 6.85, 6.82, 6.75],
    label: "30-Year Fixed Mortgage Rate"
  },
  treasury10Y: {
    current: 4.32,
    previous: 4.35,
    change: -0.03,
    history: [4.40, 4.38, 4.37, 4.36, 4.35, 4.32],
    label: "10-Year Treasury Yield"
  },
  treasury2Y: {
    current: 4.75,
    previous: 4.78,
    change: -0.03,
    history: [4.85, 4.82, 4.80, 4.79, 4.78, 4.75],
    label: "2-Year Treasury Yield"
  },
  autoLoan: {
    current: 7.25,
    previous: 7.30,
    change: -0.05,
    history: [7.45, 7.40, 7.35, 7.32, 7.30, 7.25],
    label: "Average Auto Loan Rate"
  }
};

/**
 * @swagger
 * /interestRates:
 *   get:
 *     summary: Get interest rates data
 *     description: Returns data for various interest rates including mortgage rates, treasury yields, and auto loan rates
 *     tags: [Interest Rates]
 *     responses:
 *       200:
 *         description: Interest rates data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mortgage:
 *                   $ref: '#/components/schemas/InterestRate'
 *                 treasury10Y:
 *                   $ref: '#/components/schemas/InterestRate'
 *                 treasury2Y:
 *                   $ref: '#/components/schemas/InterestRate'
 *                 autoLoan:
 *                   $ref: '#/components/schemas/InterestRate'
 */
router.get('/', function(req, res, next) {
  res.json(interestRates);
});

module.exports = router;
