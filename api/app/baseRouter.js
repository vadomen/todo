const task = require('./task');
const category = require('./category');

module.exports = (app) => {
  app.use(task);
  app.use(category);
};
