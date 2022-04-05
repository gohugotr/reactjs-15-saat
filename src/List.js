import React, { Component } from "react";
import "./List.css";
import PropTypes from "prop-types";

class List extends Component {

  state = 
  {
    filterText:'',
  }

  OnChangeFilterText = (e) => 
  {
    //console.log(e.target.value);
    this.setState({
      filterText: e.target.value,
    });
  };

  render() {

    const filteredContacts = this.props.contacts.filter(
        contact => {
          // name alanı için harf girildiğinde, indexOf "-1" değilse 
          //(harf eşleşiyorsa)  sonuç ver.
            return contact.name.toLowerCase().indexOf(
                this.state.filterText.toLowerCase()
            ) !==-1;
          // 'cengiz'.indexOf('n'); ==> 'n' harfi kaçıncı harf. Yoksa -1 döner.
        }
    )

    return (
      <div className={"listArea"}>
        <input type="text" value={this.state.filterText} onChange={this.OnChangeFilterText}
         name="filter" id="filter" placeholder="Filter by name or phone" />

        <ul className={"list"}>
          {
            filteredContacts.map((kisiler) => (
           // this.props.contacts.map((kisiler) => (
              <li key={kisiler.phone}>
                <span className="name">{kisiler.name}</span>
                <span className="phone">{kisiler.phone}</span>
              </li>
            ))
          }
        </ul>
 
      </div>
    );
  }
}
List.propType = {
  contacts: PropTypes.array.isRequired,
};
export default List;
