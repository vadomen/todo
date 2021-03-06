const mongoose = require('mongoose');
const { logger, mongo: { connectionString, options } } = require('../config');
const { timestampPlugin } = require('./plugins/timestamp');

mongoose.Promise = global.Promise;
mongoose.plugin(timestampPlugin);

const connectDb = function () {
  return mongoose.connect(connectionString, options)
    .then(() => {
      logger.info('Database connection establishing');
    })
    .catch((error) => {
      logger.info('Could not connect to MongoDB');
      throw new Error(error);
    });
};

module.exports = {
  connectDb,
};
