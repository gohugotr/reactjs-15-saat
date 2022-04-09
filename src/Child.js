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

  render() {
    console.log("Child Render çalıştı.");
    return (
      <div>
        child
      </div>
    );
  }
}
export default Child;