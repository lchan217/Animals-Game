import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchUsers} from '../actions/userActions.js'

class UserContainer extends Component {
  componentDidMount() {
    this.props.fetchUsers()
   }

  render() {
    return (
        <div>
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
const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  }
}

export default connect(null, mapDispatchToProps)(UserContainer)
