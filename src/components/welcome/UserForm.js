import React from "react";
import { connect } from "react-redux";
import { addUser } from "../../actions/userActions.js";

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

    const background = {
      width: "100%",
      height: "800px",
      padding: "40px",
      backgroundImage: `url(https://images.unsplash.com/photo-1479046934034-119c613579a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)`,
      backgroundSize: "cover"
    };
    return (
      <div style={background}>
        <div className='userForm'>
          <div
            className='ui big form'
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className='field'>
                <input
                  type='text'
                  name='name'
                  style={{ width: 400 }}
                  placeholder='Name'
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div className='field'>
                <input
                  type='text'
                  name='age'
                  style={{ width: 400 }}
                  placeholder='Age'
                  value={age}
                  onChange={handleChange}
                />
              </div>
              <div className='field'>
                <input
                  type='text'
                  name='occupation'
                  style={{ width: 400 }}
                  placeholder='Occupation'
                  value={occupation}
                  onChange={handleChange}
                />
              </div>
              <div className='field'>
                <input
                  type='text'
                  name='score'
                  style={{ width: 400 }}
                  placeholder='Score'
                  value={score}
                  onChange={handleChange}
                />
              </div>
              <button className='ui submit button' type='submit'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addUser })(UserForm);
