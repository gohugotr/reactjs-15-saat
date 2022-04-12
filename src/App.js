import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    fiyat: 0,
  };
  changeFiyat = (e) => {
    this.setState({
      fiyat: e.target.value,
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    //console.log(`shouldComponentUpdate nextProps:`, nextState);
    return nextState.fiyat % 5 === 0; // 5 ve katları şeklinde portakal alınmasını istiyoruz.
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevProps, prevState);
  }

  render() {
    return (
      <div className="App">
        <br />
        <input name="fiyat" id="fiyat" onChange={this.changeFiyat} />
        <br />
        <strong>Her Portakal 5 TL</strong>

        <p>{this.state.fiyat / 5} tane portakal alınabilir</p>
      </div>
    );
  }
}
export default App;
