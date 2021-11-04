const html = require('html-template-tag');
const main = require('./main');
module.exports = (books) =>
  main(html`
    <ul>
      ${books.map(
        (book) => `
    <li>
    <a href='/books/${book.isbn13}'>${book.title}</a> by ${book.authors
          .map(
            (author) => `<a href='/authors/${author.name}'>${author.name}</a>`
          )
          .join(', ')} (${book.isbn13} ${book.edition})
    </li>
  `
      )}
    </ul>
  `);
