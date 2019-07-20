import React from 'react';

class Timer extends React.Component {
  constructor() {
  super();
  this.state = {
    time: 0
  };
}

// componentDidMount() {
// needs to happen onClick of first animal to be saved
//   this.interval = setInterval(this.startClock, 1000)
// }
//
// componentWillUnmount(){
// needs to happen onCLick of last animal to be saved 
//   clearInterval(this.interval);
// }

  render() {
    return (
      <div>
          Timer: {this.state.time}
      </div>
    );
  }

  // startClock = () => {
  //   this.setState(prevState => ({
  //     time: prevState.time+1
  //   }))
  // }
  //
  // stopClock = () => {
  //   clearInterval(this.interval)
  // }
}

export default Timer
