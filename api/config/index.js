const logger = require('./logger');

const port = process.env.APP_PORT || 3000;
const env = process.env.NODE_ENV || 'development';

module.exports = {
  env,
  port,
  logger,
};
