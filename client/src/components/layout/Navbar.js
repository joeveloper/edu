import React, { Component } from "react";
import { Link } from "react-router-dom";

const logo = require("./logo.png");

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white darken-1">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center white-text"
            >
              <img
                src={logo}
                alt="Logo"
                style={{ marginBottom: "100px", height: "100px" }}
              />
              <br />
              <br />
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
