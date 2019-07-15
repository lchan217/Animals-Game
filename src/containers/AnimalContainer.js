import React, { Component } from 'react'

class AnimalContainer extends Component {

  render() {
    return (
      <div>
      test-animals
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
// const mapDispatchToProps = dispatch => {
//   return {
//     addRestaurant: (restaurant) => dispatch(addRestaurant(restaurant)),
//     delete: (id) => dispatch(deleteRestaurant(id)),
//     update: (restaurant) => dispatch(updateRestaurant(restaurant))
//   }
// }


export default AnimalContainer
// export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
