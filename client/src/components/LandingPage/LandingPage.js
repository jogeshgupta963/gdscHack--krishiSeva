import React, { Fragment } from 'react'
import './LandingPage.css'
function LandingPage() {
  return (
      <Fragment>
          <div className="main-container">
      <div className="text-container">
        <h1>Krishi Sewa</h1>
        <p style={{fontSize: "1.5em"}}><u>Tagline</u></p>
      </div>
      <h1 className="text">I am a:</h1>
      <div className="btn-container">
        <button type="button" className="btn btn-success">
          <a href="/api/v1/user/login">Farmer</a>
        </button>
        <button type="button" className="btn btn-success">Expert</button>
        <button type="button" className="btn btn-success">Middleman</button>
      </div>
    </div>
    <button><a href="register.html">Register</a></button>
    <button><a href="login.html">Login</a></button>

    <footer className="page-footer font-small blue fixed-bottom">
    <div className="footer-copyright text-center py-3">
        © 2022 Copyright: HTML5
      </div>
      </footer>
      </Fragment>
  )
}

export default LandingPage