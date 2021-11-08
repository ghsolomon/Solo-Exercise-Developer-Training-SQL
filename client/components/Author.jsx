import React from 'react';
import axios from 'axios';
import BookRow from './BookRow';
import { Link } from 'react-router-dom';
class Author extends React.Component {
  constructor(props) {
    super(props);
    this.state = { author: { name: '', books: [] } };
    this.handleDelete = this.handleDelete.bind(this);
  }
  async componentDidMount() {
    const { data } = await axios.get(
      `/api/authors/${this.props.match.params.name}`
    );
    this.setState({ author: data });
  }
  async handleDelete() {
    await axios.delete(`/api/authors/${this.props.match.params.name}`);
    this.props.history.push('/');
    // NEED TO UPDATE SEQUELIZE MODEL TO CASCADE DELETE
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
        <Link to={`/authors/${this.state.author.name}/edit`}>
          <button>Edit</button>
        </Link>
        {/* <button onClick={this.handleDelete}>Delete</button> */}
      </>
    );
  }
}
export default Author;
