import axios from 'axios';
import React, { Component } from 'react';
import AuthorLink from './AuthorLink';
import { Link } from 'react-router-dom';
class Book extends Component {
  constructor(props) {
    super(props);
    this.state = { book: { authors: [] } };
    this.handleDelete = this.handleDelete.bind(this);
  }
  async componentDidMount() {
    const { data } = await axios.get(
      `/api/books/${this.props.match.params.isbn13}`
    );
    this.setState({ book: data });
  }
  async handleDelete() {
    await axios.delete(`/api/books/${this.props.match.params.isbn13}`);
    this.props.history.push('/');
  }
  render() {
    const book = this.state.book;
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
  }
}

export default Book;
