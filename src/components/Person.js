import React, { Component } from 'react';

class Person extends Component {
  constructor(props){
    super(props);
    this.state = {
      person: {
        name: '',
        role: ''
      }
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ person: { [name]: value }  });
  }

  render(){
    const { person } = this.state;
    return (
      <div>
        <h1>{ person.name } is famous for { person.role }</h1>
        <input 
          name="name"
          placeholder="Name"
          onChange={this.handleChange}
        />
        <input 
          name="role"
          placeholder="Role"
          onChange={this.handleChange}
        />
        <button
          onClick={() => console.log(this.state.name)}
        >
          Log Person
        </button>
      </div>
    )
  }

}

export default Person;