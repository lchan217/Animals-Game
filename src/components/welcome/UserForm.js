import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
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
      formSubmit: false,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.name !== "") {
      this.props.addUser(this.state);
      this.setState({
        name: "",
        age: "",
        occupation: "",
        formSubmit: true,
      });
    } else {
      alert("Don't forget to add your name!");
    }
  };
  render() {
    const { name, age, occupation, formSubmit } = this.state;
    const { handleChange, handleSubmit } = this;
    if (formSubmit) {
      return <Redirect to='/animals' />;
    }
    return (
      <div className='score-form-background'>
        <h1 className='form-header'>Please enter your details: </h1>
        <Form className='score-form' onSubmit={handleSubmit}>
          <Form.Input value={name} onChange={handleChange}>
            <input className='score-input' placeholder='Name' name='name' />
          </Form.Input>
          <Form.Input value={age} onChange={handleChange}>
            <input className='score-input' placeholder='Age' name='age' />
          </Form.Input>
          <Form.Input value={occupation} onChange={handleChange}>
            <input
              className='score-input'
              placeholder='Occupation'
              name='occupation'
            />
          </Form.Input>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, { addUser })(UserForm);
