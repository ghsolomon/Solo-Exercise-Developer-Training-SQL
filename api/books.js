const { Router } = require('express');
const { Author } = require('../db');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    res.send(await Author.findAll());
  } catch (error) {
    next(error);
  }
});

module.exports = router;
