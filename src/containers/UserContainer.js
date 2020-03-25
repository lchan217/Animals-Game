import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/userActions.js";
// import HighScores from "../components/welcome/HighScores";
import UserCard from "../components/welcome/UserCard";
import { Card } from "semantic-ui-react";
import "../css/UserContainer.css";

class UserContainer extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  showUsers() {
    // if (this.props.users.length > 0 && this.props.filter === "highscores") {
    //   const sorted = this.props.users.sort(function(a, b) {
    //     return a.score - b.score;
    //   });
    //   const firstFive = sorted.slice(0, 5);
    //   return (
    //     <div className='high-scores-background'>
    //       <div className='high-scores-wrapper'>
    //         <h1>Top 5 Scores</h1>
    //         {firstFive.map((user, index) => (
    //           <HighScores key={index} {...user} />
    //         ))}
    //       </div>
    //     </div>
    //   );
    // }
    if (this.props.users.length > 0) {
      this.props.users.sort((a, b) => a.score - b.score);
      return (
        <div>
          <h2>User Cards</h2>
          <Card.Group itemsPerRow={5}>
            {this.props.users.map((user, index) => (
              <UserCard key={index} {...user} />
            ))}
          </Card.Group>
        </div>
      );
    }
  }

  render() {
    return <div>{this.showUsers()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
