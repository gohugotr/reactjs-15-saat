import React, { Component } from "react";

const loaderHOC = (WrappedComponent) => {
  return class loaderHOC extends Component {
    render() {
        return <WrappedComponent {...this.props} />;
    }
  }
}

export default loaderHOC;
