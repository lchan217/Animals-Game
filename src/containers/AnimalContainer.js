import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchAnimals} from '../actions/animalActions.js'
import AnimalList from '../components/animals/AnimalList.js'
import BreedingList from '../components/animals/BreedingList.js'
import EndangeredList from '../components/animals/EndangeredList.js'
import WildList from '../components/animals/WildList.js'

class AnimalContainer extends Component {
    componentDidMount() {
      this.props.fetchAnimals()
     }

     showAnimalList(){
       if (this.props.animals.length > 0 ){
         return this.props.animals.map(animal =>
           <li>{animal.name}</li>)
       }
     }

  render() {
    return (
        <div>
          <AnimalList animals={this.props.animals} showAnimalList={this.showAnimalList()}/>
          <BreedingList animals={this.props.animals}/>
          <EndangeredList animals={this.props.animals}/>
          <WildList animals={this.props.animals}/>
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
