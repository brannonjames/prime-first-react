import React, { Component } from 'react';
import Person from './Person';

class PersonList extends Component {

  renderPeople = () => {
    return this.props.people.map((person, i) => (
      <Person key={i} {...person} />
    ));
  }

  render(){
    return (
      <ul style={{ listStyle: 'none' }}>
        { this.renderPeople() }
      </ul>
    )
  }
}

export default PersonList;