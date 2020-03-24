import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAnimals } from "../actions/animalActions.js";
import { fetchGoals } from "../actions/goalActions.js";
import AnimalCard from "../components/animals/AnimalCard";
import { Card, Container, Button, Icon } from "semantic-ui-react";
import "../css/AnimalContainer.css";

class AnimalContainer extends Component {
  constructor() {
    super();
    this.state = {
      time: 0
    };
  }
  componentDidMount() {
    this.props.fetchAnimals();
    this.props.fetchGoals();
    this.interval = setInterval(this.startClock, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  // =================================================showlists=================================================================
  showGoals = () => {
    if (this.props.goals.length > 0) {
      return this.props.goals.map(goal => <li>{goal.name}</li>);
    }
  };

  matchThree = () => {
    if (this.props.animals.length > 0 && this.props.goals.length > 0) {
      const saved = this.props.animals.filter(
        animal => animal.status === "Wild"
      );
      const savedNames = [];
      const goalNames = [];
      saved.map(savedAnimal => savedNames.push(savedAnimal.name));

      this.props.goals.map(goal => goalNames.push(goal.name));

      if (saved.length === 3) {
        let sortedA = savedNames.sort();
        let sortedB = goalNames.sort();
        let success = [];
        for (let i = 0; i < sortedA.length; i++) {
          if (sortedA[i] !== sortedB[i]) {
            success.push(0);
            this.stopClock();
          } else {
            success.push(1);
            this.stopClock();
          }
        }
        return success.every(currentValue => currentValue) ? (
          <div className='game-over-alert'>
            <div className='game-over-alert-text'>
              <Icon name='check circle outline' size='large' color='green'>
                {" "}
                <h3>Congrats, you saved three animals!</h3>
              </Icon>{" "}
              <Button
                onClick={() => {
                  window.location.href = "/users/scores";
                }}
                color='red'
                className='alert-to-scores'
              >
                To Scores
              </Button>
            </div>
          </div>
        ) : (
          <div className='game-over-alert'>
            <div className='game-over-alert-text'>
              <Icon name='exclamation triangle'></Icon>Don't forget to save the
              right animals! Please start a new game.
            </div>
            <br /> <br />
            <Button
              onClick={() => {
                window.location.reload();
              }}
              color='red'
              size='mini'
              className='alert-new-game'
            >
              New Game
            </Button>
          </div>
        );
      }
    }
  };

  showAnimalCard = () => {
    if (this.props.animals.length > 0) {
      const all = this.props.animals.sort(function(a, b) {
        return a.id - b.id;
      });
      return (
        <Card.Group className='animal-cards'>
          {all.map((animal, index) => (
            <AnimalCard key={index} {...animal} />
          ))}
        </Card.Group>
      );
    }
  };

  showTimer = () => {
    return (
      <div className='timer'>
        <b>Timer: {this.state.time} </b>
        <Button
          onClick={() => {
            window.location.reload();
          }}
          color='red'
          size='mini'
          className='alert-new-game'
        >
          New Game
        </Button>
      </div>
    );
  };

  render() {
    return (
      <Container className='animal-container'>
        {this.showTimer()}
        <h4>Capture, nurse, and release these animals in order to win!</h4>
        <ol>{this.showGoals()}</ol>
        {this.matchThree()}
        {this.showAnimalCard()}
      </Container>
    );
  }

  startClock = () => {
    this.setState(prevState => ({
      time: prevState.time + 1
    }));
  };

  stopClock = () => {
    clearInterval(this.interval);
  };
}

const mapStateToProps = state => {
  return {
    animals: state.animals,
    goals: state.goals
  };
};

export default connect(mapStateToProps, { fetchAnimals, fetchGoals })(
  AnimalContainer
);
