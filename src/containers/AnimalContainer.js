import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchAnimals} from '../actions/animalActions.js'
import AnimalCard from '../components/animals/AnimalCard'
import ThreeRandom from '../components/animals/ThreeRandom'
import Timer from '../components/animals/Timer'
import { Card } from 'semantic-ui-react'

class AnimalContainer extends Component {
    componentDidMount() {
      this.props.fetchAnimals()
     }
// =================================================showlists=================================================================
     showAnimalCard(){
       // if (this.props.animals.length > 0  && this.props.filter === "breeding"){
       //   let breeding =  this.props.animals.filter(animal => animal.status === "breeding")
       //   return (
       //     <Card.Group itemsPerRow={5}>
       //       {breeding.map((animal, index) => <AnimalCard key={index} {...animal}/>)}
       //     </Card.Group>
       //   )
       // }

       if (this.props.animals.length > 0){
         const all =  this.props.animals.sort(function(a,b){
           return a.id - b.id
         })
         return (
           <Card.Group itemsPerRow={5}>
             {all.map((animal, index) => <AnimalCard key={index} {...animal}/>)}
           </Card.Group>
         )
       }
       // if (this.props.animals.length > 0 && this.props.filter === "endangered"){
       //   let endangered = this.props.animals.filter(animal => animal.status === "endangered")
       //   return (
       //     <Card.Group itemsPerRow={5}>
       //       {endangered.map((animal, index) => <AnimalCard key={index} {...animal}/>)}
       //     </Card.Group>
       //   )
       // }
        // if (this.props.animals.length > 0  && this.props.filter === "wild"){
        //   let wild =  this.props.animals.filter(animal => animal.status === "wild")
        //   return (
        //     <Card.Group itemsPerRow={5}>
        //       {wild.map((animal, index) => <AnimalCard key={index} {...animal}/>)}
        //     </Card.Group>
        //   )
        // }
     }

  threeRandom = () =>{
    if (this.props.animals.length > 0){
      const shuffled = this.props.animals.sort(() => 0.5 - Math.random())
      let selected = shuffled.slice(0, 3)
      return (
        <ThreeRandom selected={selected}/>
      )
    }
  }

  showTimer(){
    return (
      <Timer />
    )
  }

  render() {
    return (
        <div>
          {this.showTimer()}
          {this.threeRandom()}
          {this.showAnimalCard()}
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
