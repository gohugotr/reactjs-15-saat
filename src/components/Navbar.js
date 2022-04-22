import React from "react";
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
              to="about"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
