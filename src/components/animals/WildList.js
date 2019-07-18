
import React, { Component } from 'react';
import AnimalCard from './AnimalCard'

 export default class WildList extends Component {
     render() {
        return (
            <div className="wildList">
              <AnimalCard showWildList={this.props.showWildList} />
            </div>
        )
    }
}
