import { Component } from "react";
import "./App.css";
import Contacts from "./Contacts";

class App extends Component {

  constructor(props)
  {
    super(props);
    this.addContact = this.addContact.bind(this); 
  }

  state = {
    contacts: [
      {
        name: "Cengiz Yılmaz",
        phone: "0505 666 77 88",
      },
      {
        name: "Tuba Tekin",
        phone: "0545 566 00 99",
      },
      {
        name: "Ahmet Yılmaz",
        phone: "0535 647 34 22",
      },
    ],
  };

  addContact(e) {
    console.log(e);
  }
  render() {
    return (
      <div className="App">
        <Contacts addContact={this.addContact} contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
