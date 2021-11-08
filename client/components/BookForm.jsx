import React from 'react';
import axios from 'axios';
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
  async submitForm(event) {
    event.preventDefault();
    if (this.props.match.params.isbn13) {
      await axios.put(
        `/api/books/${this.props.match.params.isbn13}`,
        this.state
      );
    } else {
      await axios.post('/api/books', this.state);
    }
    this.props.history.push('/books');
  }
  async componentDidMount() {
    if (this.props.match.params.isbn13) {
      const { data } = await axios.get(
        `/api/books/${this.props.match.params.isbn13}`
      );
      this.setState({
        ...data,
        publicationDate: new Date(data.publicationDate).toLocaleDateString(),
        authors: data.authors.map((author) => author.name).join(', '),
      });
    }
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
export default BookForm;
