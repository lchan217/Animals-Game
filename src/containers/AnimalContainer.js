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
     }

  saveThree() {
    if(this.props.animals.length > 0) {
      const saved = this.props.animals.filter(animal => animal.status === "wild")
      if (saved.length > 2) {
        alert("Congrats, you saved three animals! Don't forget to stop the timer!")
      }

    }
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
          {this.saveThree()}
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
