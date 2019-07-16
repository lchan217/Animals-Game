
import React, { Component } from 'react';

 export default class AnimalList extends Component {



     render() {
        return (
            <div>
              {this.props.showAnimalList}
            </div>
        )
    }
}
