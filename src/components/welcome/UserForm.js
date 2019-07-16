//persist to backend
import React from 'react';

class UserForm extends React.Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }

    handleSubmit = event => {
    event.preventDefault()
    //this.sendFormDataSomewhere(this.state)
  }

  render() {
    return (
      <div>
      Please enter your name: 
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default UserForm;
