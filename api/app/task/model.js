const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: String,
  description: String,
  status: Boolean,
  remind: { type: Date },
  categories: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
    },
  ],
});

module.exports = {
  model: mongoose.model('Task', schema),
  name: 'Task',
  defaultOrder: { title: 'asc' },
  defaultFilter: { status: 'active' },
};
