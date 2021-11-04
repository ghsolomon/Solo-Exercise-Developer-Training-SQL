const html = require('html-template-tag');
const main = require('./main');
module.exports = (book) =>
  main(html`
    <h3>${book.title}</h3>
    <table>
      <tr>
        <td>Authors</td>
        <td>
          <ul>
            ${book.authors.map(
              (author) =>
                `<li><a href='/authors/${author.name}'>${author.name}</a></li>`
            )}
          </ul>
        </td>
      </tr>
      <tr>
        <td>ISBN-13</td>
        <td>${book.isbn13}</td>
      </tr>
      <tr>
        <td>Edition</td>
        <td>${book.edition}</td>
      </tr>
      <tr>
        <td>Description</td>
        <td>${book.description}</td>
      </tr>
      <tr>
        <td>Language</td>
        <td>${book.language}</td>
      </tr>
      <tr>
        <td>Publication Date</td>
        <td>${new Date(book.publicationDate).toLocaleDateString()}</td>
      </tr>
    </table>
  `);
