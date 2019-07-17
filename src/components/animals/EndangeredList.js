
import React, { Component } from 'react';

 export default class EndangeredList extends Component {
     render() {
        return (
            <div className="endangeredList">
              {this.props.showEndangeredList}
            </div>
        )
    }
}
