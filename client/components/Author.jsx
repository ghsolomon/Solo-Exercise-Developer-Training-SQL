import React from 'react';
import BookRow from './BookRow';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthor, clearAuthor } from '../store/author';
class Author extends React.Component {
  componentDidMount() {
    this.props.setAuthor(this.props.match.params.name);
  }
  componentWillUnmount() {
    this.props.clearAuthor();
  }
  render() {
    if (this.props.author.name) {
      return (
        <>
          <h3>{this.props.author.name}</h3>
          <ul>
            {this.props.author.books.map((book) => (
              <BookRow book={book} key={book.isbn13} />
            ))}
          </ul>
          <Link to={`/authors/${this.props.author.name}/edit`}>
            <button>Edit</button>
          </Link>
        </>
      );
    }
    return <div>Loading...</div>;
  }
}

const mapStateToProps = (state) => ({
  author: state.author,
});
const mapDispatchToProps = (dispatch) => ({
  setAuthor: (authorName) => dispatch(setAuthor(authorName)),
  clearAuthor: () => dispatch(clearAuthor()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Author);
