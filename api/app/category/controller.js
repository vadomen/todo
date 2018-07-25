const findAll = (req, res) => {
  res.send('category findAll');
};

const create = (req, res) => {
  res.send('category create');
};

const update = (req, res) => {
  res.send('category create');
};

const destroy = (req, res) => {
  res.send('category destroy');
};

module.exports = {
  findAll,
  create,
  update,
  destroy,
};
