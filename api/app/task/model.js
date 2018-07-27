const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: Boolean,
    default: false,
  },
  remind: { type: Date },
  categories: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
    },
  ],
}, { toJSON: { virtuals: true }, toObject: { virtuals: true } });

module.exports = {
  model: mongoose.model('Task', schema),
  name: 'Task',
  defaultOrder: { title: 'asc' },
  defaultFilter: { status: 'active' },
};
