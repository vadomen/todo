const task = require('./task/index');
const category = require('./category/index');

module.exports = (app) => {
  app.use(task);
  app.use(category);
};
