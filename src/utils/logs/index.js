const { createLogger, format, transports } = require('winston');
const expressWinston = require('express-winston');
const config = require('./../../config');

exports.expressLogger = expressWinston.logger({
  transports: [
    new transports.Console({
      level: config.log.level || 'info',
    }),
  ],
  format: format.combine(format.json()),
  meta: config.env !== 'production',
  msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms', // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
  expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
  colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
  ignoreRoute() {
    return false;
  }, // optional: allows to skip some log messages based on request and/or response
});

const logger = createLogger({
  level: config.log.level,
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.json()
  ),
  defaultMeta: { service: config.id },
  transports: [
    new transports.File({
      filename: './logs/error.log',
      level: 'error',
    }),
    new transports.File({ filename: './logs/combined.log' }),
  ],
});

// add console
if (config.env !== 'production') {
  logger.add(
    new transports.Console({
      format: format.json(),
    })
  );
}

exports.logger = logger;
