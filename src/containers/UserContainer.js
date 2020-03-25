import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/userActions.js";
// import HighScores from "../components/welcome/HighScores";
import ScoreList from "../components/welcome/ScoreList";
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
        <div className='score-list'>
          <h2>User Cards</h2>
          <ol>
            {this.props.users.map((user, index) => (
              <ScoreList key={index} {...user} />
            ))}
          </ol>
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
