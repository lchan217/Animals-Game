import React, { Component } from 'react';

 export default class UserList extends Component {

     render() {
        return (
            <div className="userList">
              {this.props.showUsers}
            </div>
        )
    }
}
