import React, { Fragment } from 'react'
import Navbar from '../../Navbar/Navbar'
import './Login.css'
function Login() {
  return (
    <Fragment>


      <Navbar/>
        <section class="vh-100">
      {/* <!-- <img src="images/login_element.png" class="login_element" alt="" /> --> */}
      <img src="/img/login_element.png" class="login_element" alt="" />
      <h2 class="login">Welcome Back</h2>
      <div class="image-container">
        <img src="/img/login_bg.png" class="login_bg" alt="" />
        {/* <!-- <img src="images/login_bg.png" class="login_bg" alt="" /> --> */}
      </div>
      <form class="login-container">
        {/* <!-- Phone Number --> */}
        <div class="form-outline mb-4">
          <input
            type="number"
            id="typeEmailX-2"
            placeholder="Phone Number"
            class="form-control form-control-sm"
          />
        </div>

        {/* <!-- Password --> */}
        <div class="form-outline mb-4">
          <input
            type="password"
            placeholder="Enter Password"
            id="login-password"
            class="form-control form-control-sm"
          />
        </div>

        <div class="options">
          <p><input type="checkbox" name=" Remember me" id="" /> Remember me</p>
          <p>Forgot password?</p>
        </div>

        {/* <!-- Login Button -->  */}
        <button
          class="btn btn-primary btn-sm btn-block"
          type="submit"
          id="login-btn"
        >
          <a href="/api/v1/farmer/home"> Sign In</a>
        </button>

        <div class="footer-text">
          <p>
            Don’t have an account?
            <a href="/api/v1/user/signup"> Sign Up</a>
            {/* <!-- <a href="register.html"> Sign up</a> --> */}
          </p>
        </div>
      </form>
    </section>
    </Fragment>
  )
}

export default Login