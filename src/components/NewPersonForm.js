import React, { Component } from 'react';

class NewPersonForm extends Component {

  state = { name: '', role: '', popularity: '' }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.submit(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange('name')} placeholder="Name" />
        <input type="text" onChange={this.handleChange('role')} placeholder="Role" />
        <input type="text" onChange={this.handleChange('popularity')} placeholder="Popularity" />
        <button>Submit</button>
      </form>
    )
  }
}

export default NewPersonForm;