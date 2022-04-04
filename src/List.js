import React, { Component } from "react";
import "./List.css";
import PropTypes from "prop-types";

class List extends Component {
  render() {
    return (
      <div className={"listArea"}>
        <input type="text" name="filter" id="filter" placeholder="Filter by name or phone" />
        <ul className={"list"}>
          {this.props.contacts.map((kisiler) => (
            <li key={kisiler.phone}>
              <span className="name">{kisiler.name}</span>
              <span className="phone">{kisiler.phone}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
List.propType = {
  contacts: PropTypes.array.isRequired,
};
export default List;
