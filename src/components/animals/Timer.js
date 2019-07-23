import React from 'react';

class Timer extends React.Component {
  constructor() {
  super();
  this.state = {
    time: 0
  };
}

componentDidMount() {
  this.interval = setInterval(this.startClock, 1000)
}

componentWillUnmount(){
// needs to happen onCLick of last animal to be saved
  clearInterval(this.interval);
}

  render() {
    return (
      <div className="Timer">
          Timer: {this.state.time} <button onClick={() => {this.stopClock()}}>Stop</button>
      </div>
    );
  }

  startClock = () => {
    this.setState(prevState => ({
      time: prevState.time+1
    }))
  }

  stopClock = () => {
    clearInterval(this.interval)
    alert('Remember to record your score! No cheating!')
  }
}

export default Timer
