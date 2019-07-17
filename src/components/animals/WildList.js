
import React, { Component } from 'react';

 export default class WildList extends Component {
     render() {
        return (
            <div className="wildList">
              {this.props.showWildList}
            </div>
        )
    }
}
