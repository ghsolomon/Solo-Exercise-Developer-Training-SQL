const { Router } = require('express');
const { Author, Book } = require('../db');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    res.send(
      await Author.findAll({
        include: {
          model: Book,
          attributes: ['title'],
          through: { attributes: [] },
        },
      })
    );
  } catch (error) {
    next(error);
  }
});

router.get('/:authorName', async (req, res, next) => {
  try {
    const foundAuthor = await Author.findByName(req.params.authorName);
    res.json(foundAuthor);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const createdAuthor = await Author.create(req.body);
    res.json(createdAuthor);
  } catch (error) {
    next(error);
  }
});

router.put('/:authorName', async (req, res, next) => {
  try {
    const foundAuthor = await Author.findByName(req.params.authorName);
    if (!foundAuthor) {
      res.sendStatus(404);
    } else {
      const updatedAuthor = await foundAuthor.update(req.body);
      res.json(updatedAuthor);
    }
  } catch (error) {
    next(error);
  }
});

router.delete('/:authorName', async (req, res, next) => {
  try {
    const foundAuthor = await Author.findByName(req.params.authorName);
    if (!foundAuthor) {
      res.sendStatus(404);
    } else {
      foundAuthor.destroy();
      res.json(foundAuthor);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
