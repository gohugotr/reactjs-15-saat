import React, { Component } from 'react'

class Child extends Component {
  constructor(props) {
    console.log("Child Constructor çalıştı..");
    super(props);
  }

  componentWillMount() {
    console.log("Child WillMount çalıştı.");
  }

  componentDidMount() {
    console.log("Child DidMount çalıştı.");
  }
  componentWillReceiveProps(){
      alert("Merhaba WillReceiveProps çalıştı");
      console.log("WillReceiveProps çalıştı");
  }

  render() {
    console.log("Child Render çalıştı.");
    return (
      <div>
        <h1>Child component</h1>
        <h2>Favori rengim: {this.props.renk}</h2>
      </div>
    );
  }
}
export default Child;