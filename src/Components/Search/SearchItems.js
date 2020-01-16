import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  margin: 1rem;
`;

const Text = styled.span`
  margin-right: 1rem;
`;

const SearchIcon = styled.i`
  position: absolute;
  cursor: pointer;
`;

const Input = styled.input`
  all: unset;
  border-bottom: 2px solid #fff;
  padding-left: 1.5rem;
  padding-bottom: 0.5rem;
  display: ${prop => (prop.isOpen === true ? "block" : "none")};
`;

const Search = ({
  value,
  isOpen,
  handleSubmit,
  handleChange,
  searchButton
}) => (
  <Container>
    <Text>Search</Text>
    <form onSubmit={handleSubmit}>
      <SearchIcon className="fas fa-search" onClick={searchButton} />
      <Input value={value} onChange={handleChange} isOpen={isOpen} />
    </form>
  </Container>
);

Search.propTypes = {
  value: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  searchButton: PropTypes.func.isRequired
};

export default Search;
