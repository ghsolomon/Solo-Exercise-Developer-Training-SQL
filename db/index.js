const Author = require('./author');
const Book = require('./book');
const db = require('./db');

Author.belongsToMany(Book, {
  through: 'BookAuthors',
  as: 'books',
});
Book.belongsToMany(Author, {
  through: 'BookAuthors',
  as: 'authors',
});

module.exports = { Author, Book, db };
