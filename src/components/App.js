import React, { Component } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

class App extends Component {

  state = {
    images: [],
  }

  onSearchImage = async(search) => 
  {
   // console.log("App.js içindeyiz : " + search);
    const resimData = await axios.get("https://api.unsplash.com/search/photos", {
      params: 
      { 
        query : search
      },
      headers: 
      { 
        Authorization: 'Client-ID ML5T9rOlcLziCWrr0xgufyObJ86A0gpV36rPixpvcaE' 
      },
    })
    // console.log(resimData.data.results);
    this.setState({
      images : resimData.data.results
    })
  };
  render() {
    return (
      <div>
        <SearchBar onSearchImage={this.onSearchImage} />
        <p>{this.state.images.length} sayıda resim bulundu.</p>
      </div>
    );
  }
};

export default App;
