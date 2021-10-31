const { Router } = require('express');
const books = require('./books');
const authors = require('./authors');
const router = Router();

router.use('/books', books);
router.use('/authors', authors);
router.use((err, req, res, next) => {
  console.error(err);
  res.send('There was an error!', 500);
});

module.exports = router;
