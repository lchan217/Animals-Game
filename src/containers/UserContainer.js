import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchUsers} from '../actions/userActions.js'
import UserList from '../components/welcome/UserList'

class UserContainer extends Component {
  componentDidMount() {
    this.props.fetchUsers()
   }

   showUsers(){
     if (this.props.users.length > 0) {
      return this.props.users.map((user,idx) => <li key={idx}>{user.name}</li>)
     }
   }

  render() {
    return (
        <div>
          <UserList users={this.props.users} showUsers={this.showUsers()}/>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      users: state.users
    };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
