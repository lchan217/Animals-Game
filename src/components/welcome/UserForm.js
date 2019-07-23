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
    score: ''
  };
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
      score: ''
    })
  }

  render() {
    const { name, age, occupation, score } = this.state
    const { handleChange, handleSubmit } = this
    return (
      <div className="ui big form" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Name</label>
            <input type="text"
              name="name"
              style={{width: 400}}
              placeholder="Name"
              value={name}
              onChange={handleChange}
              />
          </div>
          <div className="field">
            <label>Age</label>
            <input type="text"
              name="age"
              style={{width: 400}}
              placeholder="Age"
              value={age}
              onChange={handleChange}
              />
          </div>
          <div className="field">
            <label>Occupation</label>
            <input type="text"
              name="occupation"
              style={{width: 400}}
              placeholder="Occupation"
              value={occupation}
              onChange={handleChange}
              />
          </div>
          <div className="field">
            <label>Score</label>
            <input type="text"
              name="score"
              style={{width: 400}}
              placeholder="Score"
              value={score}
              onChange={handleChange}
              />
          </div>
          <button className="ui submit button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(null, {addUser})(UserForm)
