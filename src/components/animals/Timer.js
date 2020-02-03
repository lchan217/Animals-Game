import React from "react";
import { Button } from "semantic-ui-react";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0
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
        Timer: {this.state.time}{" "}
        <Button
          color='red'
          size='mini'
          onClick={() => {
            this.stopClock();
          }}
        >
          Stop
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
    alert("Remember to record your score! No cheating!");
  };
}

export default Timer;
