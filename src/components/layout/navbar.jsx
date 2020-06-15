import React from "react";
import { Link } from "react-router-dom";

function navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="https://github.com/">
          <i className="fab fa-github"></i>
          Github
        </a>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default navbar;
