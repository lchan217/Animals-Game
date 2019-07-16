import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchAnimals} from '../actions/animalActions.js'
import AnimalCard from '../components/animals/AnimalCard.js'

class AnimalContainer extends Component {
    componentDidMount() {
      this.props.fetchAnimals()
     }

  render() {
    return (
        <div>
          <AnimalCard animals={this.props.animals}/>
        </div>
    )
  }
}

// app -> animal countainer --> animalCard --> animalList, breedingList, endangeredList, wildList

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
