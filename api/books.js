const { Router } = require('express');
const { Book, Author } = require('../db');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    res.send(
      await Book.findAll({
        attributes: [
          'isbn13',
          'title',
          'edition',
          'description',
          'language',
          'publicationDate',
        ],
        order: [['isbn13', 'ASC']],
        include: {
          model: Author,
          attributes: ['name'],
          through: { attributes: [] },
        },
      })
    );
  } catch (error) {
    next(error);
  }
});

module.exports = router;
