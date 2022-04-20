import React, { Component } from "react";
import SearchBar from "./searchbar/SearchBar";
import axios from "axios";
import ImageList from "./image/ImageList"

class App extends Component {
  state = {
    images: [],
  };

  onSearchImage = async (search, per_page) => {
    // console.log("App.js içindeyiz : " + search);
    const resimData = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: search,
        per_page: per_page,
      },
      headers: {
        Authorization: "Client-ID ML5T9rOlcLziCWrr0xgufyObJ86A0gpV36rPixpvcaE",
      },
    });
    // console.log(resimData.data.results);
    this.setState({
      images: resimData.data.results,
    });
  };
  render() {
    return (
      <div>
        <SearchBar onSearchImage={this.onSearchImage} />
        {/* <p>{this.state.images.length} sayıda resim bulundu.</p> */}
        <ImageList images={this.state.images}  />
      </div>
    );
  }
};

export default App;
