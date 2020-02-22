import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAnimals } from "../actions/animalActions.js";
import { fetchGoals } from "../actions/goalActions.js";
import AnimalCard from "../components/animals/AnimalCard";
import Timer from "../components/animals/Timer";
import { Card, Container } from "semantic-ui-react";
import "../css/AnimalContainer.css";

class AnimalContainer extends Component {
  componentDidMount() {
    this.props.fetchAnimals();
    this.props.fetchGoals();
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
          } else {
            success.push(1);
          }
        }
        success.every(currentValue => currentValue)
          ? alert(
              "Congrats, you saved three animals! Don't forget to stop the timer!"
            )
          : alert(
              "Please start a new game. Don't forget to save the right animals!"
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

  render() {
    return (
      <Container className='animal-container'>
        <Timer />
        <h4>Capture, nurse, and release these animals in order to win!</h4>
        <ol>{this.showGoals()}</ol>
        {this.matchThree()}
        {this.showAnimalCard()}
      </Container>
    );
  }
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
