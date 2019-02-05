import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <br />
            <br />
            <br />
            <h4>
              <b>EduStripe - </b> leveragring Technology to redefine Education
            </h4>
            <p className="flow-text grey-text text-darken-1">
              This portal is strictly applicable to School Administrators and
              their respective teachers.
            </p>
            <br />
            <Link
              to="/register"
              style={{
                margin: "auto",
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                backgroundColor: "#27446f"
              }}
              className="btn btn-large waves-effect waves-light hoverable darken-1"
            >
              Register
            </Link>
            <Link
              to="/login"
              style={{
                margin: "auto",
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                backgroundColor: "#29aae2"
              }}
              className="btn btn-large waves-effect  hoverable black-text"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
