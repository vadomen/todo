const BaseController = require('../baseController');
const model = require('./model');

class CategoryController extends BaseController {
  constructor() {
    super(model.name, model.defaultOrder, model.defaultFilter);
  }

  async findById(req, res) {
    return super.findById(req, res, 'tasks');
  }
}

module.exports = new CategoryController();
