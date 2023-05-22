import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav
      className="navbar fixed-top navbar-expand-md navbar-dark  mb-3"
      style={{ backgroundColor: "#19A7CE" }}
    >
      <div className="flex-row d-flex">
        <button
          type="button"
          className="navbar-toggler mr-2 "
          data-toggle="offcanvas"
          title="Toggle responsive left sidebar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a
          className="navbar-brand"
          href="#"
          title="Free Bootstrap 4 Admin Template"
        >
          Profile page
        </a>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsingNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="collapsingNavbar">
        <ul className="navbar-nav">
          <Link to="/">
            <li className="nav-item active">
              <a className="nav-link">
                First Page<span className="sr-only">first page</span>
              </a>
            </li>
          </Link>
          {/* <li className="nav-item">
                            <a className="nav-link" href="//www.codeply.com">Link</a>
                        </li> */}
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#myAlert" data-toggle="collapse">
              Alert
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href=""
              data-target="#myModal"
              data-toggle="modal"
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link waves-effect waves-light text-white">
              <i className="fab fa-google-plus-g"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link waves-effect waves-light text-white">
              <i className="fas fa-envelope-open-text"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link waves-effect waves-light text-white">
              <i className="fas fa-align-justify"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
