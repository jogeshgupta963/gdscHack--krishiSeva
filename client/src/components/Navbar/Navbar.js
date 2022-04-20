import React, { Fragment } from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <Fragment>
            <nav class="main-nav">
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
            
    </Fragment>
  )
}

export default Navbar