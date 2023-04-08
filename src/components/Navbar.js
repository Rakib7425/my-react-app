import React from "react";
// import Navbarstyle.css from ".././components_css"
// import Navbarstyless from "../components_css/Navbarstyle.css";
import PropTypes from "prop-types";

const navbar = (props) => {
  return (
    <>
      <div className="container" id="form-container-background">
        <div className="row">
          <div className="col-12">
            <nav
              className="navbar navbar-expand-lg bg-body-tertiary bg-dark border border-warning mt-3" data-bs-theme="dark"
              id="navbar-id"
            >
              <div className="container-fluid">
                <a className="navbar-brand" href="/">
                  {props.title}
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="/">
                        {props.aboutItem}
                      </a>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;
navbar.propTypes = { title: PropTypes.string, aboutItem: PropTypes.string };

// Specifies the default values for props:
navbar.defaultProps = {
  title: "Enter you title here",
  aboutItem: "Enter your about here",
};
