import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAnimals } from "../actions/animalActions.js";
import AnimalCard from "../components/animals/AnimalCard";
import Timer from "../components/animals/Timer";
import { Card } from "semantic-ui-react";

class AnimalContainer extends Component {
  componentDidMount() {
    this.props.fetchAnimals();
  }
  // =================================================showlists=================================================================
  showAnimalCard() {
    if (this.props.animals.length > 0) {
      const all = this.props.animals.sort(function(a, b) {
        return a.id - b.id;
      });
      return (
        <Card.Group>
          {all.map((animal, index) => (
            <AnimalCard key={index} {...animal} />
          ))}
        </Card.Group>
      );
    }
  }

  saveThree() {
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
  }

  showTimer() {
    return <Timer />;
  }

  render() {
    return (
      <div>
        {this.showTimer()}
        <br></br>
        {this.saveThree()}
        {this.showAnimalCard()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    animals: state.animals
  };
};

export default connect(mapStateToProps, { fetchAnimals })(AnimalContainer);
