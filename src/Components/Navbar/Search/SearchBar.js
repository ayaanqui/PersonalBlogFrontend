import React, { Component } from "react";
import axios from "axios";
import Ob from "../../../hoc/Ob";

class SearchBar extends Component {
  state = {
    searchResults: [],
    showResults: false,
  }

  handleSearchInput = event => {
    var searchInput = event.target.value;
    searchInput = searchInput.trim();

    if (searchInput !== "") {
      axios.get(`http://127.0.0.1:8000/api/posts/?q=${searchInput}&order_by=published&limit=20`)
        .then(res => {
          this.setState({ searchResults: res.data });
        });
    }
  };

  render() {
    return (
      <Ob>
        <div className="dropdown" style={{position: "relative"}}>
          <input
            className="form-control mr-sm-2 form-control-sm"
            id="searchToggle"
            data-toggle="dropdown"
            type="text"
            placeholder="Search"
            onChange={this.handleSearchInput}
            autoComplete="off"
          />

          <div className="dropdown-menu" aria-labelledby="searchToggle">
            <div>
              <div className="search-results-posts">
                {this.state.searchResults.map(post => {
                  return (
                    <a
                      className="dropdown-item"
                      key={post.id + "_" + post.slug + "_search"}
                    >
                      {post.title}
                    </a>
                  );
                })}
              </div>

              {/* <p>Start typing to see your search results</p> */}
            </div>
          </div>
        </div>
      </Ob>
    );
  }
}

export default SearchBar;