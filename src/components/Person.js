import React, { Component } from 'react';

class Person extends Component {
  constructor(props){
    super(props);
    this.state = {
      person: {
        name: '',
        role: '',
        popularity: ''
      }
    }
  }

  handleChange = name => event => {
    this.setState({ person: { ...this.state.person, [name]: event.target.value } });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.person);
  }

  render(){
    const { person } = this.state;
    return (
      <div>
        <h1>{ person.name } is famous for { person.role }</h1>
        <h2>Popularity: { person.popularity }</h2>
        <form onSubmit={this.handleSubmit}>
          <input 
            name="name"
            placeholder="Name"
            onChange={this.handleChange('name')}
          />
          <input 
            name="role"
            placeholder="Role"
            onChange={this.handleChange('role')}
          />
          <input 
            placeholder="Popularity"
            onChange={this.handleChange('popularity')}
          />
          <button
            onClick={() => console.log(this.state.name)}
          >
            Log Person
          </button>
        </form>
      </div>
    )
  }

}

export default Person;