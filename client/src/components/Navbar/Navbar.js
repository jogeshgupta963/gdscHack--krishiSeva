import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <Fragment>
      <nav class="navbar navbar-expand-md p-0 px-0 navbara-light" id="navbarrr">
        <div class="container-fluid">
          {/* <!-- toggle button for mobile nav --> */}
          <button
            class="navbar-toggler navbar-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon navbar-light"></span>
          </button>

          {/* <!-- navbar Links --> */}
          <div
            class="collapse navbar-collapse justify-content-end align-center"
            id="main-nav"
          >
            <ul class="navbar-nav">
              <li class="nav-item mx-2 my-md-3 line-hover">
                <Link to="/home" class="nav-link">
                  Home
                </Link>
              </li>
              <li class="nav-item mx-2 my-md-3 line-hover">
                <a href="#reviews" class="nav-link">
                  About us
                </a>
              </li>
              <li class="nav-item mx-2 my-md-3 line-hover">
                <Link to="/login" class="nav-link">
                  Login
                </Link>
              </li>
              <li class="nav-item mx-2 my-md-3 line-hover">
                <a href="#blog" class="nav-link">
                  FAQs
                </a>
              </li>
              {/* <li class="nav-item mx-2 my-3 line-hover"><a href="#careers" class="nav-link">Careers</a></li> */}
              <li class="nav-item mx-2 my-md-3 d-md-none">
                <a href="#footer" class="nav-link">
                  Get in touch
                </a>
              </li>
              <li class="nav-item mx-2 my-md-3 d-none d-md-inline">
                <a
                  href="#request"
                  class="btn rounded px-3 p-1 btn-success mt-1 text-light"
                  id="invite-btn_1"
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>  
    </Fragment>
  );
}

export default Navbar;
