const { Router } = require('express');
const books = require('./books');
const authors = require('./authors');
const router = Router();

router.use('/books', books);
router.use('/authors', authors);

module.exports = router;
