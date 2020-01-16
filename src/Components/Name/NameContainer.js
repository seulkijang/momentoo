import React, { Component } from "react";
import NameItems from "./NameItems";

class NameContainer extends Component {
  state = {
    value: ""
  };
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    this.props.saveName(value);
  };
  render() {
    const { value } = this.state;
    return (
      <NameItems
        value={value}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default NameContainer;
