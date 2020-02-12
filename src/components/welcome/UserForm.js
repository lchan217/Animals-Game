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
        <h1 className='form-header'>Please enter your details: </h1>
        <Form className='score-form' onSubmit={handleSubmit}>
          <Form.Input value={name} onChange={handleChange}>
            <input className='score-input' placeholder='Name' />
          </Form.Input>
          <Form.Input value={age} onChange={handleChange}>
            <input className='score-input' placeholder='Age' />
          </Form.Input>
          <Form.Input value={occupation} onChange={handleChange}>
            <input className='score-input' placeholder='Occupation' />
          </Form.Input>
          <Form.Input value={score} onChange={handleChange}>
            <input className='score-input' placeholder='Score' />
          </Form.Input>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, { addUser })(UserForm);
