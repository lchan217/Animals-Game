import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchAnimals } from '../actions/animalActions'
import AnimalCard from '../components/animals/AnimalCard'

class AnimalContainer extends Component {
    componentDidMount() {
      this.props.fetchAnimals()
     }
// =================================================showlists=================================================================
     showBreedingList(){
       if (this.props.animals.length > 0  && this.props.filter === "breeding"){
         let breeding =  this.props.animals.filter(animal => animal.status === "breeding")
         return <AnimalCard breeding={breeding}/>
       }
       if (this.props.animals.length > 0 && this.props.filter === "all"){
         let breeding =  this.props.animals.filter(animal => animal.status === "breeding")
         return <AnimalCard breeding={breeding}/>
        }
     }

     showEndangeredList(){
       if (this.props.animals.length > 0 && this.props.filter === "endangered"){
         let endangered = this.props.animals.filter(animal => animal.status === "endangered")
         return <AnimalCard endangered={endangered} /> }
       if (this.props.animals.length > 0 && this.props.filter === "all"){
         let endangered =  this.props.animals.filter(animal => animal.status === "endangered")
         return <AnimalCard endangered={endangered} /> }
     }

     showWildList(){
       if (this.props.animals.length > 0  && this.props.filter === "wild"){
         let wild =  this.props.animals.filter(animal => animal.status === "wild")
         return <AnimalCard wild={wild} />
        }
       if (this.props.animals.length > 0  && this.props.filter === "all"){
         let wild =  this.props.animals.filter(animal => animal.status === "wild")
         return <AnimalCard wild={wild} />
       }
     }
// ==================================================onclicks=================================================================

  render() {
    return (
        <div>
          <AnimalCard animals={this.props.animals} showBreedingList={this.showBreedingList()} showEndangeredList={this.showEndangeredList()} showWildList={this.showWildList()}/>
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
