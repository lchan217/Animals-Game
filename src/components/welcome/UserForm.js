import React from 'react';
import { connect } from 'react-redux';
import {addUser} from '../../actions/userActions.js'

class UserForm extends React.Component {
  constructor() {
  super();
  this.state = {
    name: '',
    age: '',
    occupation: '',
  };
  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleChange = this.handleChange.bind(this)
}

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

    handleSubmit = event => {
    event.preventDefault()
    this.props.addUser(this.state)
    this.setState({
      name: '',
      age: '',
      occupation: '',
    })
  }

  render() {
    const { name, age, occupation } = this.state
    const { handleChange, handleSubmit } = this
    return (
      <div>
        <form onSubmit={handleSubmit}>
        Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        Age:
          <input
            type="text"
            name="age"
            value={age}
            onChange={handleChange}
          />
        Occupation:
          <input
            type="text"
            name="occupation"
            value={occupation}
            onChange={handleChange}
          />
        <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: (user) => dispatch(addUser(user)),
  }
}

export default connect(null, mapDispatchToProps)(UserForm)
