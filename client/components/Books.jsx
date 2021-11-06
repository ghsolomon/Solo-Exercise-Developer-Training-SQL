import React, { Component } from 'react';
import axios from 'axios';
import BookRow from './BookRow';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }
  async componentDidMount() {
    const { data } = await axios.get('/api/books');
    this.setState({ books: data });
  }
  render() {
    return (
      <ul>
        {this.state.books.map((book) => (
          <BookRow book={book} key={book.isbn13} />
        ))}
      </ul>
    );
  }
}
export default Books;
