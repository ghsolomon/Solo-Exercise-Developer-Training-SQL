import React from 'react';
import axios from 'axios';
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
      const { data: author } = await axios.put(
        `/api/authors/${this.props.match.params.name}`,
        this.state
      );
      this.props.history.push(`/authors/${author.name}`);
    } else {
      const { data: author } = await axios.post('/api/authors', this.state);
      this.props.history.push(`/authors/${author.name}`);
    }
  }
  async componentDidMount() {
    if (this.props.match.params.name) {
      const { data } = await axios.get(
        `/api/authors/${this.props.match.params.name}`
      );
      this.setState({
        name: data.name,
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
export default AuthorForm;
