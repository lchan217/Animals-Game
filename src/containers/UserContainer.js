import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchUsers} from '../actions/userActions.js'
import HighScores from '../components/welcome/HighScores'
import UserCard from '../components/welcome/UserCard'
import { Card } from 'semantic-ui-react'

class UserContainer extends Component {

  componentDidMount() {
    this.props.fetchUsers()
   }

   showUsers(){
     if (this.props.users.length > 0 && this.props.filter === "highscores" ) {
      return (
        <Card.Group itemsPerRow={5}>
          {this.props.users.map((user, index) => <HighScores key={index} {...user}/>)}
        </Card.Group>
      )
     }
     if (this.props.users.length > 0 && this.props.filter === "cards" ) {
       return (
         <Card.Group itemsPerRow={5}>
           {this.props.users.map((user, index) => <UserCard key={index} {...user}/>)}
         </Card.Group>
       )
     }
   }

  render() {
    return (
        <div>
          {this.showUsers()}
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
