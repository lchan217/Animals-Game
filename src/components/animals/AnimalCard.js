
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {breedingToWild, endangeredToBreeding, nurse} from '../../actions/animalActions.js'

class AnimalCard extends Component {
     render() {
        return (
            <div className="AnimalCard">
              {this.props.showEndangeredList}
              {this.props.showBreedingList}
              {this.props.showWildList}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
  return {
    breedingToWild: (id) => dispatch(breedingToWild(id)),
    endangeredToBreeding: (id) => dispatch(endangeredToBreeding(id)),
    nurse: (id) => dispatch(nurse(id)),
  }
}

export default connect(null, mapDispatchToProps)(AnimalCard)
