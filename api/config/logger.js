const winston = require('winston');

const { env } = require('./index');

const level = env === 'production' ? 'error' : 'silly';
const logger = winston.createLogger({
  level,
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (env !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

module.exports = logger;
