
import React, { Component } from 'react';
import AnimalCard from './AnimalCard'

 export default class BreedingList extends Component {
     render() {
        return (
            <div className="breedingList">
              <AnimalCard showBreedingList={this.props.showBreedingList} />
            </div>
        )
    }
}
