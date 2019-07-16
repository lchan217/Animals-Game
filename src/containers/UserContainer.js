import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserForm from '../components/welcome/UserForm';
import UserList from '../components/welcome/UserList';
import Instructions from '../components/welcome/Instructions';

class UserContainer extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={UserForm} />
          <Route path="/userlist" exact component={UserList} />
          <Route path="/instructions" exact component={Instructions} />
        </div>
      </Router>
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
