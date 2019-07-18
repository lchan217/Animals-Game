
import React, { Component } from 'react';


 export default class AnimalCard extends Component {
     render() {
        return (
            <div className="endangeredList">
              {this.props.showEndangeredList}
              {this.props.showBreedingList}
              {this.props.showWildList}
            </div>
        )
    }
}
