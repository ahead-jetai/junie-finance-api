var express = require('express');
var router = express.Router();
var swaggerJsdoc = require('swagger-jsdoc');

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

/**
 * @swagger
 * /api-spec:
 *   get:
 *     summary: Get API specification
 *     description: Returns the complete API specification in JSON format
 *     tags: [API]
 *     responses:
 *       200:
 *         description: JSON containing the complete API specification
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.get('/api-spec', function (req, res, next) {
    // Import the same swagger options from app.js
    const swaggerOptions = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Junie Finance Dashboard API',
                version: '1.0.0',
                description: 'API for Junie Finance Dashboard providing financial data and metrics',
                contact: {
                    name: 'API Support',
                    email: 'support@juniefinance.com'
                }
            },
            servers: [
                {
                    url: 'http://localhost:3000',
                    description: 'Development server'
                }
            ],
            components: {
                schemas: {
                    StockIndex: {
                        type: 'object',
                        properties: {
                            current: {
                                type: 'number',
                                description: 'Current value of the index'
                            },
                            previous: {
                                type: 'number',
                                description: 'Previous value of the index'
                            },
                            change: {
                                type: 'number',
                                description: 'Percentage change from previous value'
                            },
                            history: {
                                type: 'array',
                                items: {
                                    type: 'number'
                                },
                                description: 'Historical values for the last 6 days'
                            },
                            label: {
                                type: 'string',
                                description: 'Display name of the index'
                            }
                        }
                    },
                    CryptoIndex: {
                        type: 'object',
                        properties: {
                            current: {
                                type: 'number',
                                description: 'Current value of the cryptocurrency'
                            },
                            previous: {
                                type: 'number',
                                description: 'Previous value of the cryptocurrency'
                            },
                            change: {
                                type: 'number',
                                description: 'Percentage change from previous value'
                            },
                            history: {
                                type: 'array',
                                items: {
                                    type: 'number'
                                },
                                description: 'Historical values for the last 6 days'
                            },
                            label: {
                                type: 'string',
                                description: 'Display name of the cryptocurrency'
                            }
                        }
                    },
                    InterestRate: {
                        type: 'object',
                        properties: {
                            current: {
                                type: 'number',
                                description: 'Current interest rate value'
                            },
                            previous: {
                                type: 'number',
                                description: 'Previous interest rate value'
                            },
                            change: {
                                type: 'number',
                                description: 'Change from previous value (in percentage points)'
                            },
                            history: {
                                type: 'array',
                                items: {
                                    type: 'number'
                                },
                                description: 'Historical values for the last 6 days'
                            },
                            label: {
                                type: 'string',
                                description: 'Display name of the interest rate'
                            }
                        }
                    },
                    BankingMetric: {
                        type: 'object',
                        properties: {
                            current: {
                                type: 'number',
                                description: 'Current value of the metric'
                            },
                            previous: {
                                type: 'number',
                                description: 'Previous value of the metric'
                            },
                            change: {
                                type: 'number',
                                description: 'Percentage change from previous value'
                            },
                            history: {
                                type: 'array',
                                items: {
                                    type: 'number'
                                },
                                description: 'Historical values for the last 5 days'
                            },
                            label: {
                                type: 'string',
                                description: 'Display name of the metric'
                            }
                        }
                    },
                    StockItem: {
                        type: 'object',
                        properties: {
                            symbol: {
                                type: 'string',
                                description: 'Stock symbol'
                            },
                            name: {
                                type: 'string',
                                description: 'Company name'
                            },
                            price: {
                                type: 'number',
                                description: 'Current stock price'
                            },
                            change: {
                                type: 'number',
                                description: 'Percentage change in price'
                            }
                        }
                    }
                }
            }
        },
        apis: ['./routes/*.js'] // Path to the API docs
    };

    // Generate the Swagger specification
    const swaggerSpec = swaggerJsdoc(swaggerOptions);

    // Return the specification as JSON
    res.json(swaggerSpec);
});

module.exports = router;
