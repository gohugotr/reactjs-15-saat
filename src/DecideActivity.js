import React, { Component } from "react";


class DecideActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: 0,
      latitude: 0,
      error: "",
    };
  }
  decideActivity(lat) 
  {
    const currentMonth = new Date().getMonth();
    const summer = {
      text: "Yüzmeye gidebilirsin",
      icon: "sun",
    };
    const winter = {
      text: "Karda kayağa gidebilirsin",
      icon: "snowflake",
    };

    if(lat<0){
        //güney yarım küre
        // if (currentMonth > 2 && currentMonth < 9) {
        //   return winter;
        // } else {
        //   return summer;
        // }
        return currentMonth > 2 && currentMonth < 9 ? winter : summer;
    } 
    else 
    {
        //kuzey yarımküre
        // if (currentMonth > 2 && currentMonth < 9){
        //     return summer;
        // } else {
        //     return winter;
        // }
        return currentMonth > 2 && currentMonth < 9 ? summer : winter;
    }
  };

  render() {
    window.navigator.geolocation.getCurrentPosition((position) => 
    {
          //doSomething(position.coords.latitude, position.coords.longitude);
        // console.log(position);
          this.setState({
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
          });
        },
        (err) => {
          //console.log(err.message);
          this.setState({
            error: err.message,
          });
        }
      );

    const {longitude,latitude, error} = this.state;

    const Activity = this.decideActivity(latitude);

    if (longitude !== 0 && !error) {
      return (
        // <div>
        //   Boylam: {longitude}<br/>
        //   Enlem: {latitude}<br/>
        //   Ne yapmalı: {Activity}
        // </div>
        <h2 className="ui header">
          {/* {latitude > 0 ? (
            <i className="snowflake outline icon"></i>
          ) : (
            <i className="sun outline icon"></i>
          )} */}
          <i className={`${Activity.icon} outline icon`}></i>
          <div className="content">{Activity.text}</div>
        </h2>
      );
    } else if (longitude === 0 && error) {
      return (
        <div>
          Hata: {error}
        </div>
      )
    };
    return (
      <div>
        Loading ...
      </div>
    );
  }
}
export default DecideActivity;
