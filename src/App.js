import "./App.css";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Link,
  NavLink,
  Navigate,
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  loginClick = () => {
    this.setState((prevState) => ({
      loggedIn: !prevState.loggedIn,
    }));
  };

  render() {
    const Anasayfa = () => {
      return <h2>Anasayfa</h2>;
    };

    const Iletisim = () => {
      let { id } = useParams();
      return <h3>İletişim: {id}</h3>;
    };

    const Profile = () => {
      return (
        <h3>Profile: Can Boz</h3>
      );
    };

    return (
      <Router>
        <div className="App">
          <NavLink to="/" style={{ color: "red" }}>
            Anasayfa
          </NavLink>
          <NavLink to="/iletisim" className="iletisim">
            <h3>İletişim</h3>
          </NavLink>
          <Link to="destek">
            {
              <u>
                Destek<sup>3</sup>
              </u>
            }
          </Link>
          <NavLink to="/profile">
            <p>Profile</p>
          </NavLink>

          <br />
          <br />

          <input
            type="button"
            onClick={this.loginClick}
            value={this.state.loggedIn ? "Log Out" : "Login"}
          />

          <Routes>
            <Route path="/" element={<Anasayfa />} />
            <Route path="iletisim" element={<h3>İletişim</h3>} />
            <Route path="/iletisim/:id" element={<Iletisim />} />
            <Route path="destek" exact element={<h2>Destek</h2>} />
            <Route
              path="/profile"
              element={this.state.loggedIn ? <Profile /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
