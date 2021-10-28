const Author = require('./author');
const Book = require('./book');
const db = require('./db');

Author.belongsToMany(Book, {
  through: 'BookAuthors',
});
Book.belongsToMany(Author, {
  through: 'BookAuthors',
});

module.exports = { Author, Book, db };
