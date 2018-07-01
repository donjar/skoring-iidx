import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function getLinkTag(link, caption) {
  if (window.location.pathname === link) {
    return (
      <li className="nav-item active">
        <Link to={link} className="nav-link">{caption} <span className="sr-only">(current)</span></Link>
      </li>
    );
  } else {
    return (
      <li className="nav-item">
        <Link to={link} className="nav-link">{caption}</Link>
      </li>
    );
  }
}

class AppNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {getLinkTag("/", "Home")}
            {getLinkTag("/history", "History")}
            {getLinkTag("/about", "About")}
          </ul>
        </div>
      </nav>
    );
  }
}

export default AppNav;
