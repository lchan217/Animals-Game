
import React, { Component } from 'react';
import AnimalCard from './AnimalCard'

 export default class EndangeredList extends Component {
     render() {
        return (
            <div className="endangeredList">
              <AnimalCard showEndangeredList={this.props.showEndangeredList} />
            </div>
        )
    }
}
