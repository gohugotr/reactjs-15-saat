import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, useParams, Link, NavLink } from "react-router-dom";

class App extends Component {
  render() {
    const Anasayfa = () => {
      return <h2>Anasayfa</h2>;
    };

    const Iletisim = () => {
      let { id } = useParams();
      return <h3>İletişim: {id}</h3>;
    };

    return (
      <Router>
        <div className="App">
          <NavLink to="/" style={{ color: "red" }} >Anasayfa</NavLink>
          <NavLink to="/iletisim" className='iletisim' ><h3>İletişim</h3></NavLink>
          <Link to="destek" >{<u>Destek<sup>3</sup></u>}</Link>
          <Routes>
            <Route path="/" element={<Anasayfa />}></Route>
            <Route path="iletisim" element={<h3>İletişim</h3>} />
            <Route path="/iletisim/:id" element={<Iletisim />} />
            <Route path="destek" exact element={<h2>Destek</h2>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
