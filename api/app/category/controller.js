const BaseController = require('../baseController');
const model = require('./model');

class CategoryController extends BaseController {
  constructor() {
    super(model.name, model.defaultOrder, model.defaultFilter);
  }

  async findById(req, res) {
    return super.findById(req, res, 'tasks');
  }

  async create(req, res) {
    const { name } = req.body;
    if (!name) {
      return res.status(404).json({ message: 'Name is required' });
    }
    return super.create(req, res);
  }
}

module.exports = new CategoryController();
