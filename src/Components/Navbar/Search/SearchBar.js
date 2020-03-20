import React, { Component } from "react";
import axios from "axios";
import Aux from "../../../hoc/Ob";

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    searchResults: [],
    showResults: false,
  }

  handleSearchInput = event => {
    var searchInput = event.target.value;
    searchInput = searchInput.trim();

    if (searchInput !== "") {
      axios.get(`http://127.0.0.1:8000/api/posts/?q=${searchInput}&order_by=published`)
        .then(res => {
          this.setState({searchResults: res.data});
        });
    }
  };

  render() {
    return (
      <Aux>
        <input
          className="form-control mr-sm-2 form-control-sm"
          type="search"
          placeholder="Search"
          onChange={this.handleSearchInput}
        />

        <div className="search-results">
          <h4>Hi I am a search container</h4>
        </div>
      </Aux>
    );
  }
}

export default SearchBar;