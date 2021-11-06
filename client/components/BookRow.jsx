import React from 'react';
import { Link } from 'react-router-dom';
import AuthorLink from './AuthorLink';

const BookRow = ({ book }) => (
  <li>
    <Link to={`/books/${book.isbn13}`}>{book.title}</Link>
    {book.authors ? ' by ' : ''}
    {book.authors
      ? book.authors.map((author, index) => (
          <React.Fragment key={author.name}>
            {index ? ', ' : ''}
            <AuthorLink author={author} />
          </React.Fragment>
        ))
      : ''}{' '}
    ({book.isbn13} {book.edition})
  </li>
);
export default BookRow;
