import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Home from './Home';
import Creatures from './Creatures';
import puppiesData from './data/puppy-data';
import sharksData from './data/shark-data';
import unicornsData from './data/unicorn-data';
import './App.css';
import CreatureDetails from './CreatureDetails';

export default class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <main className="App">
        <header>
          <NavLink exact to="/" className="nav">Home</NavLink>
          <NavLink to="/unicorns" className="nav">Unicorns</NavLink>
          <NavLink to="/puppies" className="nav">Puppies</NavLink>
          <NavLink to="/sharks" className="nav">Sharks</NavLink>
        </header>
        <Route exact path='/' component={ Home } />
        <Route exact path='/unicorns' render={() => <Creatures data={unicornsData} /> } />
        <Route exact path='/puppies' render={() => <Creatures data={puppiesData} /> } />
        <Route exact path='/sharks' render={() => <Creatures data={sharksData} /> } />
        <Route path='/unicorns/:id' render={({ match }) => {
          let targetUnicorn = unicornsData.find(unicorn => unicorn.id == match.params.id);
          return <CreatureDetails {...targetUnicorn}/>
        }} />
        <Route path='/puppies/:id' render={({ match }) => {
          let targetPuppy = puppiesData.find(puppy => puppy.id == match.params.id);
          return <CreatureDetails id={targetPuppy.id} name={targetPuppy.name} image={targetPuppy.image} bio={targetPuppy.bio} type={targetPuppy.type} />
        }} />
        <Route path='/sharks/:id' render={({ match }) => {
          let targetShark = sharksData.find(shark => shark.id == match.params.id);
          return <CreatureDetails id={targetShark.id} name={targetShark.name} image={targetShark.image} bio={targetShark.bio} type={targetShark.type} />
        }} />
        {/* <Route path='/:creature/:id' render={({ match }) => {
          const { id, creature } = match.params;
          // console.log(typeof `${creature}Data`)
          let targetCreature = unicornsData.find(creature => creature.id == id);
          return <CreatureDetails {...targetCreature} />
        }} /> */}
      </main>
    );
  }
}
