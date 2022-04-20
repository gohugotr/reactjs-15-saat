import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      per_page: 10,
    };
    // this.onChange = this.inputChanged.bind(this);
  }
  inputChanged = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  input_per_page_Changed = (event) => {
    this.setState({
      per_page: event.target.value,
    });
  };

  svgSearchClick = () => {
    //console.log("Başarılı");
    // this.props. adı App.js'te ki fonksiyon adı olacak. Ona paramtre gönderiyoruz.
    this.props.onSearchImage(this.state.search, this.state.per_page);
  };
  render() {
    return (
      <div className="container mx-auto w-4/6 py-4 px-4">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current" onClick={this.svgSearchClick}>
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
              />
            </svg>
          </span>
          <input
            className="search"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                this.svgSearchClick();
              }
            }}
            onChange={this.inputChanged}
            placeholder="Ara..."
            type="text"
            id="search"
            name="search"
          />
        </label>
        
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                this.svgSearchClick();
              }
            }}
            onChange={this.input_per_page_Changed}
            placeholder="Kaç resim gösterilsin"
            type="text"
            id="per_page"
            name="per_page"
          />
      </div>
    );
  }
}

export default SearchBar;
