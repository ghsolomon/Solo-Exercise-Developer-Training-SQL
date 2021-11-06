import React from 'react';
import axios from 'axios';
import BookRow from './BookRow';
class Author extends React.Component {
  constructor(props) {
    super(props);
    this.state = { author: { name: '', books: [] } };
  }
  async componentDidMount() {
    const { data } = await axios.get(
      `/api/authors/${this.props.match.params.name}`
    );
    this.setState({ author: data });
  }
  render() {
    return (
      <>
        <h3>{this.state.author.name}</h3>
        <ul>
          {this.state.author.books.map((book) => (
            <BookRow book={book} key={book.isbn13} />
          ))}
        </ul>
      </>
    );
  }
}
export default Author;
