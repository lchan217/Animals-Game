
import React, { Component } from 'react';

 export default class AnimalList extends Component {



     render() {
        return (
            <div className="animalList">
              {this.props.showAnimalList}
            </div>
        )
    }
}
