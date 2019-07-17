
import React, { Component } from 'react';

 export default class Endangered extends Component {
     render() {
        return (
            <div className="endangeredList">
              {this.props.showEndangeredList}
            </div>
        )
    }
}
