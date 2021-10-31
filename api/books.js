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

router.get('/:isbn13', async (req, res, next) => {
  try {
    res.send(
      await Book.findOne({
        where: { isbn13: req.params.isbn13 },
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

router.post('/', async (req, res, next) => {
  try {
    const createdBook = await Book.create(req.body);
    res.json(createdBook);
  } catch (error) {
    next(error);
  }
});

router.put('/:isbn13', async (req, res, next) => {
  try {
    const foundBook = await Book.findOne({
      where: { isbn13: req.params.isbn13 },
    });
    if (!foundBook) {
      res.sendStatus(404);
    } else {
      const updatedBook = await foundBook.update(req.body);
      res.json(updatedBook);
    }
  } catch (error) {
    next(error);
  }
});

router.delete('/:isbn13', async (req, res, next) => {
  try {
    const foundBook = await Book.findOne({
      where: { isbn13: req.params.isbn13 },
    });
    if (!foundBook) {
      res.sendStatus(404);
    } else {
      foundBook.destroy();
      res.json(foundBook);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
