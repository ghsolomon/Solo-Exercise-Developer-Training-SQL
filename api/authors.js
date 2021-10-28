const { Router } = require('express');
const { Book } = require('../db');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    res.send(await Book.findAll());
  } catch (error) {
    next(error);
  }
});

module.exports = router;
