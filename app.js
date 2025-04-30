let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let morgan = require('morgan');
let swaggerJsdoc = require('swagger-jsdoc');
let swaggerUi = require('swagger-ui-express');
let logger = require('./logger');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let stockIndicesRouter = require('./routes/stockIndices');
let cryptoIndicesRouter = require('./routes/cryptoIndices');
let interestRatesRouter = require('./routes/interestRates');
let dailyMetricsRouter = require('./routes/dailyMetrics');
let marketOverviewRouter = require('./routes/marketOverview');
let timeLabelsRouter = require('./routes/timeLabels');

let app = express();

// Swagger definition
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

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Log HTTP requests with Morgan
app.use(morgan('dev'));

// Log application startup
logger.info('Application starting up');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/stockIndices', stockIndicesRouter);
app.use('/cryptoIndices', cryptoIndicesRouter);
app.use('/interestRates', interestRatesRouter);
app.use('/dailyMetrics', dailyMetricsRouter);
app.use('/marketOverview', marketOverviewRouter);
app.use('/timeLabels', timeLabelsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  logger.warn(`404 Not Found: ${req.method} ${req.originalUrl}`);
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  const status = err.status || 500;

  // Log error details
  if (status === 500) {
    logger.error(`Internal Server Error: ${err.message}`);
    logger.error(err.stack);
  } else {
    logger.warn(`${status} ${err.message}`);
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(status);
  res.render('error');
});

module.exports = app;
