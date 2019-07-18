import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchAnimals} from '../actions/animalActions.js'
import AnimalCard from '../components/animals/AnimalCard'

class AnimalContainer extends Component {
    componentDidMount() {
      this.props.fetchAnimals()
     }
// =================================================showlists=================================================================
     showList(){
       if (this.props.animals.length > 0  && this.props.filter === "breeding"){
         let breeding =  this.props.animals.filter(animal => animal.status === "breeding")
         return breeding.map((animal, index) => <AnimalCard key={index} animal={animal}/>)
       }
       if (this.props.animals.length > 0 && this.props.filter === "all"){
         let all =  this.props.animals
         return all.map((animal, index) => <AnimalCard key={index} animal={animal}/>)
       }
       if (this.props.animals.length > 0 && this.props.filter === "endangered"){
         let endangered = this.props.animals.filter(animal => animal.status === "endangered")
         return endangered.map((animal, index) => <AnimalCard key={index} animal={animal}/>)
       }
        if (this.props.animals.length > 0  && this.props.filter === "wild"){
          let wild =  this.props.animals.filter(animal => animal.status === "wild")
          return wild.map((animal, index) => <AnimalCard key={index} animal={animal}/>)
        }
     }

  render() {
    return (
        <div>
          {this.showList()}
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalContainer)
