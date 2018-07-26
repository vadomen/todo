const logger = require('./logger');
const mongo = require('./mongo');
const email = require('./email');

const port = process.env.APP_PORT || 3000;
const env = process.env.NODE_ENV || 'development';

module.exports = {
  env,
  port,
  logger,
  mongo,
  email,
};
