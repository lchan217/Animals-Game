import React from 'react';
import './App.css';
import AnimalContainer from './containers/AnimalContainer.js'
import UserContainer from './containers/UserContainer.js'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserForm from './components/welcome/UserForm';
import UserList from './components/welcome/UserList';
import Instructions from './components/welcome/Instructions';
import AnimalList from './components/animals/AnimalList';
import BreedingList from './components/animals/BreedingList';
import EndangeredList from './components/animals/EndangeredList';
import WildList from './components/animals/WildList';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route path="/" exact component={UserForm} />
        <Route path="/users" exact component={UserList} />
        <Route path="/instructions" exact component={Instructions} />
        <Route path="/animals" exact component={AnimalList} />
        <Route path="/breeding" exact component={BreedingList} />
        <Route path="/endangered" exact component={EndangeredList} />
        <Route path="/wild" exact component={WildList} />
        <AnimalContainer />
        <UserContainer />
      </div>
    </Router>
  )
}

export default App;
