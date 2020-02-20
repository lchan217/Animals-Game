import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAnimals } from "../actions/animalActions.js";
import { fetchGoals } from "../actions/goalActions.js";
import AnimalCard from "../components/animals/AnimalCard";
import Timer from "../components/animals/Timer";
import { Card } from "semantic-ui-react";

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

  saveThree = () => {
    if (this.props.animals.length > 0) {
      const saved = this.props.animals.filter(
        animal => animal.status === "Wild"
      );
      if (saved.length === 3) {
        alert(
          "Congrats, you saved three animals! Don't forget to stop the timer!"
        );
        this.props.animals.map(animal => (animal.status = "Endangered"));
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
      <div>
        <Timer />
        <h4>Capture, nurse, and release these animals in order to win!</h4>
        <ol>{this.showGoals()}</ol>
        <br></br>
        {this.saveThree()}
        {this.showAnimalCard()}
      </div>
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
