import React, { Component } from 'react';
import Header from './Header';
import Person from './Person';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Famous People" />
        <Person />
      </div>
    );
  }
}

export default App;
