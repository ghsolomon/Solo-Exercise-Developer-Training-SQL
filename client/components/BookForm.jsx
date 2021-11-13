import React from 'react';
import { addBook, updateBook } from '../store/books';
import { setBook, clearBook } from '../store/book';
import { connect } from 'react-redux';
class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      isbn13: '',
      edition: '',
      description: '',
      language: '',
      publicationDate: '',
      authors: '',
    };
    this.updateField = this.updateField.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  updateField(event) {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  }
  submitForm(event) {
    event.preventDefault();
    if (this.props.match.params.isbn13) {
      this.props.updateBook(this.state);
    } else {
      this.props.createBook(this.state);
    }
    this.props.history.push('/books');
  }
  componentDidMount() {
    if (this.props.match.params.isbn13) {
      this.props.setBook(this.props.match.params.isbn13);
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.book.isbn13 !== this.props.book.isbn13) {
      this.setState({
        ...this.props.book,
        publicationDate: new Date(
          this.props.book.publicationDate
        ).toLocaleDateString(),
        authors: this.props.book.authors
          ? this.props.book.authors.map((author) => author.name).join(', ')
          : '',
      });
    }
  }
  componentWillUnmount() {
    this.props.clearBook();
  }
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label htmlFor='title'>Title: </label>
          <input
            name='title'
            type='text'
            value={this.state.title}
            onChange={this.updateField}
          />
        </div>
        <div>
          <label htmlFor='isbn13'>ISBN-13: </label>
          <input
            name='isbn13'
            type='text'
            value={this.state.isbn13}
            onChange={this.updateField}
          />
        </div>
        <div>
          <label htmlFor='authors'>Authors: </label>
          <input
            name='authors'
            type='text'
            value={this.state.authors}
            onChange={this.updateField}
          />
        </div>
        <div>
          <label htmlFor='edition'>Edition: </label>
          <input
            name='edition'
            type='text'
            value={this.state.edition}
            onChange={this.updateField}
          />
        </div>
        <div>
          <label htmlFor='description'>Description </label>
          <textarea
            name='description'
            type='text'
            value={this.state.description}
            onChange={this.updateField}
          />
        </div>
        <div>
          <label htmlFor='Language'>Language: </label>
          <input
            name='language'
            type='text'
            value={this.state.language}
            onChange={this.updateField}
          />
        </div>
        <div>
          <label htmlFor='publicationDate'>Publication Date: </label>
          <input
            name='publicationDate'
            type='text'
            value={this.state.publicationDate}
            onChange={this.updateField}
          />
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  book: state.book,
});
const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => dispatch(addBook(book)),
  updateBook: (book) => dispatch(updateBook(book)),
  setBook: (isbn13) => dispatch(setBook(isbn13)),
  clearBook: () => dispatch(clearBook()),
});
export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
