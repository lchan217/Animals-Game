import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchAnimals} from '../actions/animalActions.js'

class AnimalContainer extends Component {
    componentDidMount() {
      this.props.fetchAnimals()
     }

  render() {
    return (
        <div>
        </div>
    )
  }
}

// app -> animal countainer --> animalCard --> animalList, breedingList, endangeredList, wildList


//
// const mapStateToProps = state => {
//   return {
//       restaurants: state.restaurants
//     };
// }
//
const mapDispatchToProps = dispatch => {
  return {
    fetchAnimals: () => dispatch(fetchAnimals()),
  }
}


export default connect(null, mapDispatchToProps)(AnimalContainer)
