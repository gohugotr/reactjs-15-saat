import React, { Component } from 'react'


class DecideActivity extends Component {
  constructor(props)
  {
    super(props);
    this.state = 
    {
      longitude: 0,
    }
  }
  render() {
    window.navigator.geolocation.getCurrentPosition((position) => {
      //doSomething(position.coords.latitude, position.coords.longitude);
      console.log(position);
      this.setState({
        longitude: position.coords.longitude,
      })
    },
    (err) => {
      console.log(err.message);
    }
    ); 

    return (
      <div>
        {this.state.longitude}
      </div>
    )
  }
}
export default DecideActivity;