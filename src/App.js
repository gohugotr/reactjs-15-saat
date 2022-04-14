import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    const Anasayfa = () => {
      return <h2>Anasayfa</h2>;
    };

    const Iletisim = () => {
      return <h3>İletişim</h3>;
    };

    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Anasayfa />} />
            <Route path="iletisim" exact element={<Iletisim />} />
            <Route path="/destek" exact element={<h2>Destek</h2>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
