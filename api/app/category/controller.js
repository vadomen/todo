const BaseController = require('../baseController');
const model = require('./model');

class CategoryController extends BaseController {
  constructor() {
    super(model.name, model.defaultOrder, model.defaultFilter);
  }
}

module.exports = new CategoryController();
