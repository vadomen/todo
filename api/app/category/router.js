const express = require('express');

const {
  findAll, findById, create, update, destroy,
} = require('./controller');

const router = express.Router();

router.get('/categories', findAll);
router.get('/categories/:id', findById);
router.post('/categories', create);
router.put('/categories/:id', update);
router.delete('/categories/:id', destroy);

module.exports = router;
