import React, { Component } from 'react'


class DecideActivity extends Component {
  render() {
    window.navigator.geolocation.getCurrentPosition((position) => {
      //doSomething(position.coords.latitude, position.coords.longitude);
      console.log(position);
    },
    (err) => {
      console.log(err.message);
    }
    );

    return (
      <div>

      </div>
    )
  }
}
export default DecideActivity;