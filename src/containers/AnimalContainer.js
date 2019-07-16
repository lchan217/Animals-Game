import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AnimalList from '../components/animals/AnimalList';
import BreedingList from '../components/animals/BreedingList';
import EndangeredList from '../components/animals/EndangeredList';
import WildList from '../components/animals/WildList';

class AnimalContainer extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route path="/animals" exact component={AnimalList} />
          <Route path="/breeding" exact component={BreedingList} />
          <Route path="/endangered" exact component={EndangeredList} />
          <Route path="/wild" exact component={WildList} />
        </div>
      </Router>
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
// const mapDispatchToProps = dispatch => {
//   return {
//     addRestaurant: (restaurant) => dispatch(addRestaurant(restaurant)),
//     delete: (id) => dispatch(deleteRestaurant(id)),
//     update: (restaurant) => dispatch(updateRestaurant(restaurant))
//   }
// }


export default AnimalContainer
// export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
