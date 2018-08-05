const logger = require('./logger');
const mongo = require('./mongo');
const email = require('./email');

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
const clientUrl = process.env.CLIENT_URL || 'http://localhost:4200';

module.exports = {
  env,
  port,
  logger,
  mongo,
  email,
  clientUrl,
};
