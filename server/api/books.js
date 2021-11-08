const { Router } = require('express');
const { Book, Author } = require('../db');
const { bookList, singleBook } = require('../views');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    res.json(
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
          as: 'authors',
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
    res.json(
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
          as: 'authors',
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
    const {
      title,
      isbn13,
      edition,
      description,
      language,
      publicationDate,
      authors,
    } = req.body;
    const createdBook = await Book.create({
      title,
      isbn13,
      edition,
      description,
      language,
      publicationDate,
    });
    const authorsArray = await Promise.all(
      authors.split(', ').map(async (authorName) => {
        const [author] = await Author.findOrCreate({
          where: { name: authorName },
        });
        return author;
      })
    );
    await createdBook.setAuthors(authorsArray);
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
      const {
        title,
        isbn13,
        edition,
        description,
        language,
        publicationDate,
        authors,
      } = req.body;
      console.log(req.body);
      const updatedBook = await foundBook.update({
        title,
        isbn13,
        edition,
        description,
        language,
        publicationDate,
      });
      const authorsArray = await Promise.all(
        authors.split(', ').map(async (authorName) => {
          const [author] = await Author.findOrCreate({
            where: { name: authorName },
          });
          return author;
        })
      );
      await updatedBook.setAuthors(authorsArray);
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
