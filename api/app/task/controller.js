const findAll = (req, res) => {
  res.send('task findAll');
};

const create = (req, res) => {
  res.send('task create');
};

const update = (req, res) => {
  res.send('task create');
};

const destroy = (req, res) => {
  res.send('task destroy');
};

module.exports = {
  findAll,
  create,
  update,
  destroy,
};
