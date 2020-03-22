import React, { Component } from "react";
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";

class SearchBar extends Component {
  state = {
    searchResults: [],
    loading: false,
    fail: false,
  }

  handleSearchInput = event => {
    var searchInput = event.target.value;
    searchInput = searchInput.trim();

    if (searchInput !== "") {
      this.setState({ loading: true });
      axios.get(`http://127.0.0.1:8000/api/posts/?q=${searchInput}&order_by=published&limit=20`)
        .then(res => this.setState(
          {
            searchResults: res.data,
            loading: false
          }
        ))
        .catch(err => this.setState(
          {
            loading: false,
            fail: true
          }
        ));
    } else {
      this.setState(
        {
          searchResults: [],
          loading: false
        }
      );
    }
  };

  getSearchResults = () => {
    if (this.state.fail) {
      return <div className="text-center mt-3"><p>Could not reach API servers</p></div>;
    } else if (this.state.loading) {
      return (
        <div className="text-center mt-3">
          <Spinner animation="grow" />
          <p>Fetching results</p>
        </div>
      );
    } else if (this.state.searchResults.length > 0) {
      return this.state.searchResults.map(post => {
        return (
          <a
            className="dropdown-item font-weight-bold"
            key={post.id + "_" + post.slug + "_search"}
          >
            {post.title}
          </a>
        );
      });
    } else {
      return <div className="text-center mt-3"><p>No results found</p></div>;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="dropdown" style={{ position: "relative" }}>
          <input
            className="form-control mr-sm-2 form-control-sm"
            id="searchToggle"
            data-toggle="dropdown"
            type="text"
            placeholder="Search"
            onChange={this.handleSearchInput}
            autoComplete="off"
          />

          <div className="dropdown-menu" style={{ right: "8px", left: "auto" }} aria-labelledby="searchToggle">
            <div>
              <div className="search-results-posts" style={{ width: "300px" }}>
                {this.getSearchResults()}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;