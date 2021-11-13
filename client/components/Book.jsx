import React, { Component } from 'react';
import AuthorLink from './AuthorLink';
import { Link } from 'react-router-dom';
import { setBook, clearBook } from '../store/book';
import { deleteBook } from '../store/books';
import { connect } from 'react-redux';
class Book extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    this.props.setBook(this.props.match.params.isbn13);
  }
  componentWillUnmount() {
    this.props.clearBook();
  }
  handleDelete() {
    // console.log(this.props.deleteBook);
    this.props.deleteBook(this.props.match.params.isbn13);
    this.props.history.push('/');
  }
  render() {
    const book = this.props.book;
    if (book.isbn13) {
      return (
        <>
          <h3>{book.title}</h3>
          <table>
            <tbody>
              <tr>
                <td>Authors</td>
                <td>
                  <ul>
                    {book.authors.map((author) => (
                      <li key={author.name}>
                        <AuthorLink author={author} />
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr>
                <td>ISBN-13</td>
                <td>{book.isbn13}</td>
              </tr>
              <tr>
                <td>Edition</td>
                <td>{book.edition}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{book.description}</td>
              </tr>
              <tr>
                <td>Language</td>
                <td>{book.language}</td>
              </tr>
              <tr>
                <td>Publication Date</td>
                <td>{new Date(book.publicationDate).toLocaleDateString()}</td>
              </tr>
            </tbody>
          </table>
          <Link to={`/books/${book.isbn13}/edit`}>
            <button>Edit</button>
          </Link>
          <button onClick={this.handleDelete}>Delete</button>
        </>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

const mapStateToProps = (state) => ({
  book: state.book,
});
const mapDispatchToProps = (dispatch) => ({
  setBook: (isbn13) => dispatch(setBook(isbn13)),
  clearBook: () => dispatch(clearBook()),
  deleteBook: (isbn13) => {
    dispatch(deleteBook(isbn13));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Book);
