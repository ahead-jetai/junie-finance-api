var express = require('express');
var router = express.Router();

// Market Overview data
const marketOverview = {
  topGainers: [
    { symbol: "AAPL", name: "Apple Inc.", price: 189.45, change: 2.34 },
    { symbol: "MSFT", name: "Microsoft Corp.", price: 415.23, change: 1.89 },
    { symbol: "AMZN", name: "Amazon.com Inc.", price: 178.56, change: 1.76 }
  ],
  topLosers: [
    { symbol: "META", name: "Meta Platforms Inc.", price: 475.12, change: -1.23 },
    { symbol: "TSLA", name: "Tesla Inc.", price: 175.34, change: -0.98 },
    { symbol: "NFLX", name: "Netflix Inc.", price: 605.67, change: -0.76 }
  ],
  marketSentiment: {
    bullish: 65,
    neutral: 20,
    bearish: 15
  }
};

/**
 * @swagger
 * /marketOverview:
 *   get:
 *     summary: Get market overview data
 *     description: Returns market overview data including top gainers, top losers, and market sentiment
 *     tags: [Market Overview]
 *     responses:
 *       200:
 *         description: Market overview data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 topGainers:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/StockItem'
 *                   description: List of top gaining stocks
 *                 topLosers:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/StockItem'
 *                   description: List of top losing stocks
 *                 marketSentiment:
 *                   type: object
 *                   properties:
 *                     bullish:
 *                       type: number
 *                       description: Percentage of bullish sentiment
 *                     neutral:
 *                       type: number
 *                       description: Percentage of neutral sentiment
 *                     bearish:
 *                       type: number
 *                       description: Percentage of bearish sentiment
 */
router.get('/', function(req, res, next) {
  res.json(marketOverview);
});

module.exports = router;
