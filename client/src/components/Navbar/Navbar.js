import React, { Fragment } from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <Fragment>
               {/* <nav class="navbar navbar-expand-md p-0 px-0 navbar-light" id='navbarrr'>
        <div class="container-fluid">
           */}
            {/* <!-- toggle button for mobile nav --> */}
            {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="main-nav#"
                aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> */}

            {/* <!-- navbar Links --> */}
            {/* <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                <ul class="navbar-nav">
                    <li class="nav-item mx-2 my-md-3 line-hover"><a href="#intro" class="nav-link">Home</a></li>
                    <li class="nav-item mx-2 my-md-3 line-hover"><a href="#reviews" class="nav-link">About us</a></li>
                    <li class="nav-item mx-2 my-md-3 line-hover"><a href="#footer" class="nav-link">Login</a></li>
                    <li class="nav-item mx-2 my-md-3 line-hover"><a href="#blog" class="nav-link">FAQs</a></li> */}
                    {/* <li class="nav-item mx-2 my-3 line-hover"><a href="#careers" class="nav-link">Careers</a></li> */}
                    {/* <li class="nav-item mx-2 my-md-3 d-md-none"><a href="#footer" class="nav-link">Get in touch</a></li>
                    <li class="nav-item mx-2 my-md-3 d-none d-md-inline">
                        <a href="#request" class="btn rounded px-3 p-1 btn-success mt-1 text-light" id="invite-btn_1">Get in touch</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav> */}

<div class="container p-0 align-items-center">
      <nav class="navbar navbar-expand-md navbar-light p-0 px-0"  id='navbarrr'>
        <div class="container-fluid">
          <button class="navbar-toggler collapsed d-flex d-md-none flex-column justify-content-around mb-2 p-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="toggler-icon top-bar"></span>
            <span class="toggler-icon middle-bar"></span>
            <span class="toggler-icon bottom-bar"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            {/* <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul> */}
            <ul class="navbar-nav">
                    <li class="nav-item mx-2 my-md-3 line-hover"><a href="#intro" class="nav-link">Home</a></li>
                    <li class="nav-item mx-2 my-md-3 line-hover"><a href="#reviews" class="nav-link">About us</a></li>
                    <li class="nav-item mx-2 my-md-3 line-hover"><a href="#footer" class="nav-link">Login</a></li>
                    <li class="nav-item mx-2 my-md-3 line-hover"><a href="#blog" class="nav-link">FAQs</a></li>
                    <li class="nav-item mx-2 my-md-3 line-hover"><a href="#careers" class="nav-link">Careers</a></li>
                    <li class="nav-item mx-2 my-md-3 d-md-none"><a href="#footer" class="nav-link">Get in touch</a></li>
                    <li class="nav-item mx-2 my-md-3 d-none d-md-inline">
                        <a href="#request" class="btn rounded px-3 p-1 btn-success mt-1 text-light" id="invite-btn_1">Get in touch</a>
                    </li>
                </ul>
          </div>
        </div>
      </nav>
    </div>
    </Fragment>
  )
}

export default Navbar