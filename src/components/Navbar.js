import { NavLink, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const Navbar = () => {

    const history = useNavigate();
    const { state } = useLocation();

     useEffect(() => {
       if (state === null || state === undefined) {
          setTimeout(() => {
            history("/about");
          }, 2000);
       }
     });



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
