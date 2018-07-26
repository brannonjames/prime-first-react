import React, { Component } from 'react';
import Header from './Header';
import NewPersonForm from './NewPersonForm';
import PersonList from './PersonList';
import PlanetList from './PlanetList';
import '../styles/App.css';

class App extends Component {

  state = { people: [] }

  handleNewPerson = person => {
    this.setState({
      people: [...this.state.people, person]
    });
  }

  render() {
    return (
      <main className="App">
        <Header title="Famous People" />

        <NewPersonForm 
          submit={this.handleNewPerson}
        />

        <PersonList people={this.state.people} />

        <PlanetList />

      </main>
    );
  }
}

export default App;
