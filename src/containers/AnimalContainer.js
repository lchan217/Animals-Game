import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchAnimals, deadToBreeding, breedingToWild, endangeredToBreeding, wildToDead} from '../actions/animalActions.js'
import AnimalList from '../components/animals/AnimalList.js'
import BreedingList from '../components/animals/BreedingList.js'
import EndangeredList from '../components/animals/EndangeredList.js'
import WildList from '../components/animals/WildList.js'

class AnimalContainer extends Component {
    componentDidMount() {
      this.props.fetchAnimals()
     }
// =================================================showlists=================================================================
     showAnimalList(){
       if (this.props.animals.length > 0 ){
         return this.props.animals.map((animal, idx) =>
             <li key={idx}>AnimalList - {animal.name} - {animal.status} - {animal.gender} - {animal.age}</li>)
       }
     }

     showBreedingList(){
       if (this.props.animals.length > 0 ){
         let breeding =  this.props.animals.filter(animal => animal.status === "breeding")
         return breeding.map((animal, idx) =>
         <li key={idx}>BreedingList - {animal.name} - {animal.status} - {animal.gender} - {animal.age} <button onClick={() => this.props.deadToBreeding(animal.id)}> Breed </button><button onClick={() => this.props.breedingToWild(animal.id)}>Release</button></li>)
       }
     }

     showEndangeredList(){
       if (this.props.animals.length > 0 ){
         let endangered =  this.props.animals.filter(animal => animal.status === "endangered")
         return endangered.map((animal, idx) =>
         <li key={idx}>Endangered - {animal.name} - {animal.status} - {animal.gender} - {animal.age} <button onClick={() => this.props.endangeredToBreeding(animal.id)}>Capture</button></li>)
       }
     }

     showWildList(){
       if (this.props.animals.length > 0 ){
         let wild =  this.props.animals.filter(animal => animal.status === "wild")
         return wild.map((animal, idx) =>
         <li key={idx}>Wild - {animal.name} - {animal.status} - {animal.gender} - {animal.age}</li>)
       }
     }
// ==================================================onclicks=================================================================

  render() {
    return (
        <div>
          <AnimalList animals={this.props.animals} showAnimalList={this.showAnimalList()}/>
          <BreedingList animals={this.props.animals} showBreedingList={this.showBreedingList()}/>
          <EndangeredList animals={this.props.animals} showEndangeredList={this.showEndangeredList()}/>
          <WildList animals={this.props.animals} showWildList={this.showWildList()}/>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      animals: state.animals
    };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAnimals: () => dispatch(fetchAnimals()),
    deadToBreeding: (id) => dispatch(deadToBreeding(id)),
    breedingToWild: (id) => dispatch(breedingToWild(id)),
    endangeredToBreeding: (id) => dispatch(endangeredToBreeding(id)),
    wildToDead: (id) => dispatch(wildToDead(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AnimalContainer)
