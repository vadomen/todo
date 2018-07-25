function timestampPlugin(schema) {
  schema.add({
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  });

  function updateDate(next) {
    const now = new Date();
    // eslint-disable-next-line
    if (this._id) {
      this.updatedAt = now;
    } else {
      this.update({}, { $set: { updatedAt: now } });
    }
    next();
  }

  schema
    .pre('save', updateDate)
    .pre('update', updateDate)
    .pre('findOneAndUpdate', updateDate)
    .pre('findByIdAndUpdate', updateDate);
}

module.exports = {
  timestampPlugin,
};
