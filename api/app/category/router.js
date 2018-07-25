const express = require('express');

const {
  findAll, create, update, destroy,
} = require('./controller');

const router = express.Router();

router.get('/categories', findAll);
router.post('/categories', create);
router.put('/categories/:id', update);
router.delete('/categories/:id', destroy);

module.exports = router;
