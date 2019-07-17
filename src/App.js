import React from 'react';
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
        <Route exact path='/'  component={UserForm} />
        <Route exact path='/users'  render={() => <UserContainer />} />
        <Route exact path='/instructions'  component={Instructions} />
        <Route exact path='/animals'  component = {AnimalContainer} />
        <Route exact path='/animals/:id'  render= {({match}) => < AnimalContainer filter={match.params.id}/>} />
      </div>
    </Router>
  )
}

export default App;
