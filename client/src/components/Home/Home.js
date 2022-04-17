import React, { Fragment } from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
function LandingPage() {
  return (
      <Fragment>

      <Navbar/>

          <div className="main-container">
      <div className="text-container">
        <h1>Krishi Sewa</h1>
        <p style={{fontSize: "1.5em"}}><u>Tagline</u></p>
      </div>
      <h1 className="text">I am a:</h1>
      <div className="btn-container">
        <button type="button" className="btn btn-success">
          <Link to="/login">Farmer</Link>
        </button>
        <button type="button" className="btn btn-success"><Link to="/login">Expert</Link></button>
        <button type="button" className="btn btn-success"><Link to="/login">Middlemen</Link></button>
      </div>
    </div>
    {/* <button><a href="register.html">Register</a></button>
    <button><Link to="/login">Login</Link></button> */}

    <footer className="page-footer font-small blue fixed-bottom">
    <div className="footer-copyright text-center py-3">
        © 2022 Copyright: HTML5
      </div>
      </footer>
      </Fragment>
  )
}

export default LandingPage