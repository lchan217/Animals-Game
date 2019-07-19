import React from 'react';
import { connect } from 'react-redux';
import {breedingToWild, endangeredToBreeding, nurse} from '../../actions/animalActions.js'

const AnimalCard = ({animal, breedingToWild, endangeredToBreeding, nurse}) =>
<div class="ui four cards">
  <div class="card">
    <div class="image">
      <img src={animal.img} alt={`${animal.category}`} />
   </div>
     <div class="content">
        <div class="header">{animal.name}</div>
        <div class="description">
          Health: {animal.health} <div class="ui progress">
          <div class="bar"></div>
          </div>
          Status: {animal.status}
        </div>
        <div class="ui three buttons">
          <div class="ui button" onClick={() => endangeredToBreeding(animal.id)}>Capture</div>
          <div class="ui button" onClick={() => nurse(animal.id)}>Nurse</div>
          <div class="ui button" onClick={() => breedingToWild(animal.id)}>Release</div>
        </div>
     </div>
  </div>
</div>

const mapDispatchToProps = dispatch => {
  return {
    breedingToWild: (id) => dispatch(breedingToWild(id)),
    endangeredToBreeding: (id) => dispatch(endangeredToBreeding(id)),
    nurse: (id) => dispatch(nurse(id))
  }
}

export default connect(null, mapDispatchToProps)(AnimalCard)
