import React, { Component } from 'react';
import axios from 'axios';

class PlanetList extends Component {
  constructor(props){
    super(props)
    this.state = {
      planets: [],
      next: 'https://swapi.co/api/planets/'
    }
  }

  componentDidMount = () => {
    this.getPlanets(this.state.next)
  }

  getPlanets = url => {
    axios.get(url)
      .then(response => {
        return response.data
      })
      .then(data => {
        this.setState({
          planets: [...this.state.planets, ...data.results],
          next: data.next
        })
      })
      .then(() => {
        if (this.state.next) {
          this.getPlanets(this.state.next);
        }
      })
  }

  renderPlanets = () => {
    return this.state.planets.map(planet => (
      <li key={planet.url}>{planet.name}</li>
    ))
  }

  render(){
    return (
      <ul>
        {this.renderPlanets()}
      </ul>
    )
  }

}

export default PlanetList;