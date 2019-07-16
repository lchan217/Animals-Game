//stateless

import React, { Component } from 'react';
import AnimalList from './AnimalList'
import BreedingList from './BreedingList'
import EndangeredList from './EndangeredList'
import WildList from './WildList'

 export default class AnimalCard extends Component {

     render() {
        return (
            <div>
              <AnimalList animals={this.props.animals}/>
              <BreedingList />
              <EndangeredList />
              <WildList />
            </div>
        )
    }
}
