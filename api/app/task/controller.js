const BaseController = require('../baseController');
const model = require('./model');
const { remindHandler } = require('./helpers');

class TaskController extends BaseController {
  constructor() {
    super(model.name, model.defaultOrder, model.defaultFilter);
  }

  async create(req, res) {
    const { id } = req.params;
    remindHandler(req.body || {}, id);
    return super.create(req, res);
  }

  async update(req, res) {
    const { id } = req.params;
    remindHandler(req.body || {}, id, this.model);
    return super.update(req, res);
  }
}

module.exports = new TaskController();
