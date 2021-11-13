import React, { Component } from 'react';
import BookRow from './BookRow';
import { connect } from 'react-redux';
import { fetchBooks } from '../store/books';

class Books extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }
  render() {
    return (
      <ul>
        {this.props.books.map((book) => (
          <BookRow book={book} key={book.isbn13} />
        ))}
      </ul>
    );
  }
}
const mapStateToProps = (state) => ({
  books: state.books,
});
const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => dispatch(fetchBooks()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Books);
