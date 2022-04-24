import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import './Register.css';
function Register() {
  return (
  
    <Fragment>
       <Navbar />

<div className="main_container container-fluid">
<div className="row  align-items-center">
<div className="col-6 text-start m-0 p-0" id="main-box">
            <div className="text_box ms-md-5 mt-md-3">
              <h1 className="display-1 fw-bolder" id="heading">
                Krishi<span>Seva</span>
              </h1>
              <h3 className="mt-3">Hello there!</h3>
              <h3>Sign up to get started with KrishiSeva</h3>
            </div>

            <div className='form_box'>
              <form>
                <div className="form-group row ms-5 mt-5">
                <label for="formGroupExampleInput">
                  Full Name
                    <input
                      type="text"
                      name="name"
                      className="form-control my-3 w-50"
                      placeholder="Your Full Name Here"
                    />
                  </label>
                  <label for="formGroupExampleInput">
                    Phone Number
                    <input
                      type="number"
                      name="name"
                      className="form-control my-3 w-50"
                      placeholder="Your Phone Number Here"
                      autocomplete="off"
                    />
                  </label>
                  <label for="inputPassword6">
                    Password
                    <input
                      type="password"
                      name="name"
                      className="form-control my-3 w-50"
                      placeholder="Your Password Here"
                    />
                  </label>
                  <label for="inputPassword6">
                    Confirm Password
                    <input
                      type="password"
                      name="name"
                      className="form-control my-3 w-50"
                      placeholder="Re-Enter your Password Here"
                    />
                  </label>
                  <Link
                    to="/LandingPage"
                    className="btn text-center text-light fw-bold mt-4 w-50 px-0 mx-2 py-2"
                    id="signUp_btn"
                  >
                    Sign Up
                  </Link>
                  </div>
</form>
</div>
</div>
<div className="col-6 text-start m-0 p-0" id='img_box'></div>
</div>
</div>
</Fragment>
  )
}

export default Register