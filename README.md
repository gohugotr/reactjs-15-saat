# `Redux` Uygulaması - Blog

[Modern responsive front-end framework based on Material Design](https://materializecss.com/getting-started.html)

### `BrowserRouter, Routes, Route` yapısı ve `exact`

```js script
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
  );
}

export default App;
```

### `Navlink` yapısı

```js script
import { NavLink } from "react-router-dom";

const Navbar = () => {
    let activeStyle = {
      textDecoration: "underline",
    };

    let activeClassName = "underline";
  return (
    <nav>
      <div className="nav-wrapper">
        <NavLink to="/" className="brand-logo">
          Logo
        </NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about" className={({ isActive }) => (isActive ? activeClassName : undefined)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact" className={({ isActive }) => (isActive ? activeClassName : undefined)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
```