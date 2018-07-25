const express = require('express');

const {
  findAll, create, update, destroy,
} = require('./controller');

const router = express.Router();

router.get('/tasks', findAll);
router.post('/tasks', create);
router.put('/tasks/:id', update);
router.delete('/tasks/:id', destroy);

module.exports = router;
