import React, { Component } from "react";

class Form extends Component {
  // constructor()
  // {
  //   super();
  //   this.veriGir = this.veriGir.bind(this);
  // }
  state = {
    name: "",
    phone: "",
  };

  veriGir = (e) => (
        this.setState({
          [e.target.name]:e.target.value,
        })
  );
 

  render() {
    return (
      <form>
        <input name="name" id="name" onChange={this.veriGir} value={this.state.name} placeholder="Bir isim giriniz" />
        <input name="phone" id="phone" onChange={this.veriGir} value={this.state.phone} placeholder="Bir telefon giriniz" />
        <button>Ekle</button>
      </form>
    );
  }
}
export default Form;
