import React from 'react';
import { connect } from 'react-redux';
import {
  setAuthor,
  clearAuthor,
  createAuthor,
  updateAuthor,
} from '../store/author';
class AuthorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    this.updateField = this.updateField.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  updateField(event) {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  }
  async submitForm(event) {
    event.preventDefault();
    if (this.props.match.params.name) {
      this.props.updateAuthor(
        this.props.match.params.name,
        this.state.name,
        this.props.history
      );
    } else {
      this.props.createAuthor(this.state.name, this.props.history);
    }
  }
  componentDidMount() {
    if (this.props.match.params.name) {
      this.props.setAuthor(this.props.match.params.name);
    }
  }
  componentWillUnmount() {
    this.props.clearAuthor();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.author.name !== this.props.author.name) {
      this.setState({
        name: this.props.author.name || '',
      });
    }
  }
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label htmlFor='name'>Name: </label>
          <input
            name='name'
            type='text'
            value={this.state.name}
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
  author: state.author,
});
const mapDispatchToProps = (dispatch) => ({
  setAuthor: (authorName) => dispatch(setAuthor(authorName)),
  clearAuthor: () => dispatch(clearAuthor()),
  createAuthor: (name, history) => dispatch(createAuthor(name, history)),
  updateAuthor: (oldName, newName, history) =>
    dispatch(updateAuthor(oldName, newName, history)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AuthorForm);
