const { Router } = require('express');
const books = require('./books');
const authors = require('./authors');
const router = Router();

router.use('/books', books);
router.use('/authors', authors);

router.get('/', (req, res) => {
  res.redirect('/books');
});

router.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('There was an error!');
});

module.exports = router;
