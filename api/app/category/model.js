const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
});

schema.virtual('categories', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'categories',
  justOne: false,
});

module.exports = {
  model: mongoose.model('Category', schema),
  name: 'Category',
  defaultOrder: { title: 'name' },
};
