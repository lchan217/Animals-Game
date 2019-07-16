import React from 'react';
import './App.css';
import AnimalContainer from './containers/AnimalContainer.js'
import UserContainer from './containers/UserContainer.js'

import NavBar from './components/NavBar.js';

function App() {
  return (
      <div>
        <NavBar />
        <AnimalContainer />
        <UserContainer />
      </div>
  )
}
//routes
  //instructions
  //...homeuser form
  //breeding index
  //endangered index
  //wild index
  //all animals (with new animal form)
export default App;
