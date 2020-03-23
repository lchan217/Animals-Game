import React from "react";
import "../../css/Timer.css";
import { Button } from "semantic-ui-react";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      showAlert: false
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.startClock, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className='timer'>
        <b>Timer: {this.state.time} </b>
        <Button
          onClick={() => {
            window.location.reload();
          }}
          color='red'
          size='mini'
          className='alert-new-game'
        >
          New Game
        </Button>
      </div>
    );
  }

  startClock = () => {
    this.setState(prevState => ({
      time: prevState.time + 1
    }));
  };

  stopClock = () => {
    clearInterval(this.interval);
    this.setState({
      showAlert: true
    });
  };
}

export default Timer;
