import React, { Component } from 'react'

class DecideActivity extends Component {
state=
{
    latitude:0,
    longitude:0
}

  render() 
  {
    window.navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      
    },
    (err) => {
        console.log(err);
    }
    );

    return (
      <div>
          {this.state.latitude}<br/>
         {this.state.longitude} 
      </div>
    )
  }
}
export default DecideActivity;