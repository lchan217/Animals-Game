
import React, { Component } from 'react';

 export default class BreedingList extends Component {
     render() {
        return (
            <div className="breedingList">
              {this.props.showBreedingList}
            </div>
        )
    }
}
