const mongoose = require('mongoose');
const BaseController = require('../baseController');
const model = require('./model');

class CategoryController extends BaseController {
  constructor() {
    super(model.name, model.defaultOrder, model.defaultFilter);
    this.taskModel = mongoose.model('Task');
  }

  async findById(req, res, next) {
    return super.findById(req, res, next, 'tasks');
  }

  async create(req, res) {
    const { name } = req.body;
    if (!name) {
      return res.status(404).json({ message: 'Name is required' });
    }
    return super.create(req, res);
  }

  async refuseTasksOnDestroy(id) {
    const opts = { new: true, runValidators: true, multi: true };
    const data = await this.taskModel.update({ categories: id }, { $set: { categories: [] } }, opts)
      .exec();
    return data;
  }

  async destroy({ params: { id } }, res) {
    this.refuseTasksOnDestroy(id);
    await this.model.findByIdAndRemove(id).exec();
    return res.status(204).json({ statusCode: 204 });
  }
}

module.exports = new CategoryController();
