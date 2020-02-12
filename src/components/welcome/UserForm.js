import React from "react";
import { connect } from "react-redux";
import { addUser } from "../../actions/userActions.js";
import { Form, Button } from "semantic-ui-react";
import "../../css/UserForm.css";

class UserForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      occupation: "",
      score: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    debugger;
    event.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      name: "",
      age: "",
      occupation: "",
      score: ""
    });
  };
  render() {
    const { name, age, occupation, score } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <div className='score-form-background'>
        <Form className='score-form' onSubmit={handleSubmit}>
          <Form.Input
            className='score-input'
            value={name}
            onChange={handleChange}
          >
            <label>Name</label>
            <input placeholder='Name' />
          </Form.Input>
          <Form.Input
            className='score-input'
            value={age}
            onChange={handleChange}
          >
            <label>Age</label>
            <input placeholder='Age' />
          </Form.Input>
          <Form.Input
            className='score-input'
            value={occupation}
            onChange={handleChange}
          >
            <label>Occupation</label>
            <input placeholder='Occupation' />
          </Form.Input>
          <Form.Input
            className='score-input'
            value={score}
            onChange={handleChange}
          >
            <label>Score</label>
            <input placeholder='Score' />
          </Form.Input>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, { addUser })(UserForm);
