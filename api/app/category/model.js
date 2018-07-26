const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
}, { toJSON: { virtuals: true }, toObject: { virtuals: true } });

schema.virtual('tasks', {
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
