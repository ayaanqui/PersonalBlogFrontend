import React, { Component } from "react";
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";

class SearchBar extends Component {
  state = {
    searchResults: [],
    loading: false,
    fail: false,
  }

  handleSearchInput = (event, searchPosts) => {
    var searchInput = event.target.value;
    searchInput = searchInput.trim();

    searchPosts(searchInput);
  };

  render() {
    return (
      <input
        className="form-control mr-sm-2 form-control-sm"
        type="text"
        placeholder="Search"
        onChange={(event) => this.handleSearchInput(event, this.props.searchPosts)}
        autoComplete="off"
      />
    );
  }
}

export default SearchBar;