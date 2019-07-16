import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';


class UserContainer extends Component {

  render() {
    return (
        <div>
          Users container
        </div>
    )
  }
}
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


export default UserContainer
// export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
