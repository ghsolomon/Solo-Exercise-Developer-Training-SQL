const html = require('html-template-tag');
const main = require('./main');
module.exports = (author) =>
  main(html`
    <h3>${author.name}</h3>
    <ul>
      ${author.books.map(
        (book) => `
    <li>
    <a href='/books/${book.isbn13}'>${book.title}</a> (${book.isbn13} ${book.edition})
    </li>
  `
      )}
    </ul>
  `);
