import React, { Component } from "react";
import SearchItems from "./SearchItems";

class SearchContainer extends Component {
  state = {
    value: "",
    isOpen: false
  };
  handleSubmit = e => {
    e.preventDefault();
    window.location.href = `https://duckduckgo.com/?q=${this.state.value}&t=h_&ia=web`;
  };
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  searchButton = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    const { value, isOpen } = this.state;
    return (
      <SearchItems
        value={value}
        isOpen={isOpen}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        searchButton={this.searchButton}
      />
    );
  }
}

export default SearchContainer;
