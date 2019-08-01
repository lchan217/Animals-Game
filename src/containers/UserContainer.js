import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchUsers} from '../actions/userActions.js'
import HighScores from '../components/welcome/HighScores'
import UserCard from '../components/welcome/UserCard'
import { Card } from 'semantic-ui-react'

const box = {
  fontSize: 25,
  width: '100%',
  height: '800px',
  padding: '40px',
  backgroundImage: "url(" + "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" + ")" ,
  backgroundSize: 'cover',
  }


class UserContainer extends Component {

  componentDidMount() {
    this.props.fetchUsers()
   }

   showUsers(){
     if (this.props.users.length > 0 && this.props.filter === "highscores" ) {
       const sorted = this.props.users.sort(function(a, b) {
          return a.score - b.score;
      });
      const firstFive = sorted.slice(0,5)
      return (
        <div style={box}>
          <h2 style={{fontSize: 38}}>Top 5 Scores</h2>
          {firstFive.map((user, index) => <HighScores key={index} {...user}/>)}
        </div>
      )
     }
     if (this.props.users.length > 0 && this.props.filter === "cards" ) {
       this.props.users.sort((a,b) => a.name.localeCompare(b.name))
       return (
         <div>
           <h2>User Cards</h2>
           <Card.Group itemsPerRow={5}>
             {this.props.users.map((user, index) => <UserCard key={index} {...user}/>)}
           </Card.Group>
         </div>
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
