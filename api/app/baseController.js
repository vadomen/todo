const mongoose = require('mongoose');

class BaseController {
  constructor(modelName, defaultOrder, defaultFilter) {
    this.model = mongoose.model(modelName);
    this.defaultOrder = defaultOrder || { updatedAt: 1 };
    this.defaultFilter = defaultFilter || null;
    this.create = this.create.bind(this);
    this.findAll = this.findAll.bind(this);
    this.update = this.update.bind(this);
    this.destroy = this.destroy.bind(this);
    this.sort = this.sort.bind(this);
  }

  sort(query) {
    const { sort = this.defaultOrder } = query;
    // eslint-disable-next-line
    Object.keys(sort).forEach(key => (sort[key] = sort[key] === 'asc' ? 1 : -1));

    return sort;
  }

  async findAll({ query }, res) {
    const sort = this.sort(query);
    const where = {}; // TODO this.where(query);

    const mongoQuery = this.model.find(where || {}).sort(sort || {});
    const list = await mongoQuery.exec();

    return res.status(200).json(list);
  }

  async create({ body }, res) {
    const data = await this.model.create(body);
    return res.status(201).json(data);
  }

  async update({ params: { id: _id }, body }, res) {
    const opts = { new: true, runValidators: true };
    const data = await this.model.findOneAndUpdate({ _id }, { $set: body }, opts);
    return res.status(200).json(data);
  }

  async destroy({ params: { id: _id } }, res) {
    await this.model.findByIdAndRemove(_id).exec();
    return res.status(204).json({ statusCode: 204 });
  }
}

module.exports = BaseController;
