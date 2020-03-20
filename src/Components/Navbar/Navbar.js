import React from 'react';
import Ob from '../../hoc/Ob';
import SearchBar from './Search/SearchBar';

const navbar = (props) => {
  return (
    <Ob>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container pt-3 pb-3">
          <a className="navbar-brand">Blog</a>

          <button className="btn btn-sm btn-light navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Posts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contact</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <SearchBar />
            </form>
          </div>
        </div>
      </nav>
    </Ob>
  );
};

export default navbar;