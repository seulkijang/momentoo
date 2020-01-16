import React, { Component } from "react";
import CleanItems from "./CleanItems";

class ClearContainer extends Component {
  state = {
    isOpen: false
  };
  handleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  handleNameClear = () => {
    localStorage.removeItem("MOMENTOO_NAME");
    window.location.reload();
  };
  handleTodoListClear = () => {
    localStorage.removeItem("MOMENTOO_TODO");
    window.location.reload();
  };
  handleAllClear = () => {
    localStorage.removeItem("MOMENTOO_NAME");
    localStorage.removeItem("MOMENTOO_TODO");
    window.location.reload();
  };
  render() {
    const { isOpen } = this.state;
    return (
      <CleanItems
        isOpen={isOpen}
        handleModal={this.handleModal}
        handleNameClear={this.handleNameClear}
        handleTodoListClear={this.handleTodoListClear}
        handleAllClear={this.handleAllClear}
      />
    );
  }
}

export default ClearContainer;
