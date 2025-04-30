var express = require('express');
var router = express.Router();

// Crypto Indices data
const cryptoIndices = {
    bitcoin: {
        current: 67890.45,
        previous: 66750.22,
        change: 1.71,
        history: [65720.45, 66140.32, 66560.78, 66230.56, 66750.22, 67890.45],
        label: "Bitcoin (BTC)"
    },
    ethereum: {
        current: 3456.78,
        previous: 3400.34,
        change: 1.66,
        history: [3380.23, 3395.67, 3405.34, 3390.45, 3400.34, 3456.78],
        label: "Ethereum (ETH)"
    },
    solana: {
        current: 145.67,
        previous: 138.92,
        change: 4.86,
        history: [132.45, 135.67, 137.23, 136.89, 138.92, 145.67],
        label: "Solana (SOL)"
    },
    cryptoIndex: {
        current: 2345.67,
        previous: 2310.34,
        change: 1.53,
        history: [2280.23, 2295.67, 2305.34, 2290.45, 2310.34, 2345.67],
        label: "Crypto Index"
    }
};

/**
 * @swagger
 * /cryptoIndices:
 *   get:
 *     summary: Get cryptocurrency indices data
 *     description: Returns data for major cryptocurrencies including current values, previous values, percentage changes, and historical data
 *     tags: [Crypto Indices]
 *     responses:
 *       200:
 *         description: Cryptocurrency indices data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 bitcoin:
 *                   $ref: '#/components/schemas/CryptoIndex'
 *                 ethereum:
 *                   $ref: '#/components/schemas/CryptoIndex'
 *                 solana:
 *                   $ref: '#/components/schemas/CryptoIndex'
 *                 cryptoIndex:
 *                   $ref: '#/components/schemas/CryptoIndex'
 */
router.get('/', function (req, res, next) {
    res.json(cryptoIndices);
});

module.exports = router;
