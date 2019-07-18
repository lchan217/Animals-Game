import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchAnimals, breedingToWild, endangeredToBreeding, nurse} from '../actions/animalActions.js'
import BreedingList from '../components/animals/BreedingList.js'
import EndangeredList from '../components/animals/EndangeredList.js'
import WildList from '../components/animals/WildList.js'

class AnimalContainer extends Component {
    componentDidMount() {
      this.props.fetchAnimals()
     }
// =================================================showlists=================================================================
     showBreedingList(){
       if (this.props.animals.length > 0  && this.props.filter === "breeding"){
         let breeding =  this.props.animals.filter(animal => animal.status === "breeding")
         return breeding.map((animal, idx) =>
         <li key={idx}>BreedingList - {animal.name} - {animal.status} - {animal.gender} - {animal.age}  - {animal.health}
           <button onClick={() => this.props.nurse(animal.id)}> Nurse </button>
           <button onClick={() => this.props.breedingToWild(animal.id)}>Release</button></li>)
       }
       if (this.props.animals.length > 0 && this.props.filter === "all"){
         let breeding =  this.props.animals.filter(animal => animal.status === "breeding")
         return breeding.map((animal, idx) =>
         <li key={idx}>BreedingList - {animal.name} - {animal.status} - {animal.gender} - {animal.age}  - {animal.health}
           <button onClick={() => this.props.nurse(animal.id)}> Nurse </button>
           <button onClick={() => this.props.breedingToWild(animal.id)}>Release</button></li>)}
     }

     showEndangeredList(){
       if (this.props.animals.length > 0 && this.props.filter === "endangered"){
         let endangered =  this.props.animals.filter(animal => animal.status === "endangered")
         return endangered.map((animal, idx) =>
         <li key={idx}>Endangered - {animal.name} - {animal.status} - {animal.gender} - {animal.age} - {animal.health} <button onClick={() => this.props.endangeredToBreeding(animal.id)}>Capture</button></li>)
       }
       if (this.props.animals.length > 0 && this.props.filter === "all"){
         let endangered =  this.props.animals.filter(animal => animal.status === "endangered")
         return endangered.map((animal, idx) =>
         <li key={idx}>Endangered - {animal.name} - {animal.status} - {animal.gender} - {animal.age}  - {animal.health} <button onClick={() => this.props.endangeredToBreeding(animal.id)}>Capture</button></li>)
       }
     }

     showWildList(){
       if (this.props.animals.length > 0  && this.props.filter === "wild"){
         let wild =  this.props.animals.filter(animal => animal.status === "wild")
         return wild.map((animal, idx) =>
         <li key={idx}>Wild - {animal.name} - {animal.status} - {animal.gender} - {animal.age}  - {animal.health}</li>)
       }
       if (this.props.animals.length > 0  && this.props.filter === "all"){
         let wild =  this.props.animals.filter(animal => animal.status === "wild")
         return wild.map((animal, idx) =>
         <li key={idx}>Wild - {animal.name} - {animal.status} - {animal.gender} - {animal.age}  - {animal.health}</li>)
       }
     }
// ==================================================onclicks=================================================================

  render() {
    return (
        <div>
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
    breedingToWild: (id) => dispatch(breedingToWild(id)),
    endangeredToBreeding: (id) => dispatch(endangeredToBreeding(id)),
    nurse: (id) => dispatch(nurse(id)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AnimalContainer)
