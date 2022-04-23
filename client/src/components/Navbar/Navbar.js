import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <Fragment>
      {/* <nav class="main-nav">
              <input type="checkbox" id="check" />
              <label for="check" class="menu-btn">
                <i class="fas fa-bars"></i>
              </label>

              <ul class="navlinks">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">FAQ's</a></li>
                <li><a href="#" class="get-in-touch">Get in touch</a></li>
              </ul>
            </nav>
             */}
      <nav class="navbar navbar-expand-md p-0 px-0 navbar-light" id="navbarrr">
        <div class="container-fluid">
          {/* <!-- toggle button for mobile nav --> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
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
