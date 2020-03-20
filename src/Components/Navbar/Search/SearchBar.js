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
          this.setState({ searchResults: res.data });
        });
    }
  };

  render() {
    return (
      <Aux>
        <div className="dropdown">
          <input
            className="form-control mr-sm-2 form-control-sm"
            id="searchToggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            type="search"
            placeholder="Search"
            onChange={this.handleSearchInput}
          />

          <div className="dropdown-menu" aria-labelledby="searchToggle">
            {/* <a className="dropdown-item">Action</a>
            <a className="dropdown-item">Another action</a> */}

            <div className="pl-3 pr-3"><p>Start typing to see your search results</p></div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default SearchBar;