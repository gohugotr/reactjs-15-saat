import React, { Component } from "react";
import SearchBar from "./SearchBar"

class App extends Component {
  onSearchImage = (search) => {
    console.log("App.js içindeyiz : " + search);
  };
  render() {
    return (
      <div>
        <SearchBar onSearchImage={this.onSearchImage} />
      </div>
    );
  }
};

export default App;
