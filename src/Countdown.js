import React, { Component } from 'react';

class CountDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      endDate: new Date(this.props.endDate).getTime(),
      now: new Date().getTime(),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
    
    setInterval(() => {
      let distance = this.state.endDate - this.state.now;
      this.setState({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)
  }

  render() {

    return (
      <p>{this.state.days} d {this.state.hours} h {this.state.minutes} m {this.state.seconds} s</p>
    )
  }
}

export default CountDown;