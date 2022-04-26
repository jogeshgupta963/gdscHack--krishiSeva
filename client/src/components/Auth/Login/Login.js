import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import './Login.css';
function Login () {
  return (
    <Fragment>

      <Navbar />
      {/* <section class="vh-100"> */}
      {/* <!-- <img src="images/login_element.png" class="login_element" alt="" /> --> */}
      {/* <img src="/img/login_element.png" class="login_element" alt="" />
      <h2 class="login">Welcome Back</h2>
      <div class="image-container">
        <img src="/img/login_bg.png" class="login_bg" alt="" /> */}
      {/* <!-- <img src="images/login_bg.png" class="login_bg" alt="" /> --> */}
      {/* </div>
      <form class="login-container"> */}
      {/* <!-- Phone Number --> */}
      {/* <div class="form-outline mb-4">
          <input
            type="number"
            id="typeEmailX-2"
            placeholder="Phone Number"
            class="form-control form-control-sm"
          />
        </div> */}

      {/* <!-- Password --> */}
      {/* <div class="form-outline mb-4">
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
        </div> */}

      {/* <!-- Login Button -->  */}
      {/* <button
          class="btn btn-primary btn-sm btn-block"
          type="submit"
          id="login-btn"
        >
          <a href="/api/v1/farmer/home"> Sign In</a>
        </button>

        <div class="footer-text">
          <p>
            Don’t have an account?
            <a href="/api/v1/user/signup"> Sign Up</a> */}
      {/* <!-- <a href="register.html"> Sign up</a> --> */}
      {/* </p>
        </div>
      </form>
    </section> */}

      <div className="main_container container-fluid">
        <div className="row  align-items-center">
          <div className="col-6 text-start m-0 p-0" id="main-box">
            <div className="text_box ms-md-5 mt-md-5">
              <h1 className="display-1 fw-bolder py-5 my-5" id="heading">
                Krishi<span>Seva</span>
              </h1>
              <h3 className="mt-3">Hello there!</h3>
              <h1 class="login">Welcome Back</h1>
              <h3>Login to your KrishiSeva account</h3>
            </div>

            <div className="form_box">
              {/* <form>
  <div class="form-group">
    <label for="formGroupExampleInput">Example label</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"> </input>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Another label</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"> </input>
  </div>
</form> */}

              <form>
                <div className="form-group row ms-5 mt-5">
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
                  <div class="form-check ms-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Remember Me
                      <Link
                        to="#"
                        className="text-light text-decoration-none ms-md-3 ms-lg-5 forgot_link"
                        id="forgot_link"
                      >
                        Forgot Password ?
                      </Link>
                    </label>
                  </div>

                  <Link
                    to="/LandingPage"
                    className="btn text-center text-light fw-bold mt-4 w-50 px-0 mx-3 py-2"
                    id="login_btn"
                  >
                    Login
                  </Link>
                  <p className="text-light mt-3 ms-2">
                    Don't have an account? Sign up
                    {' '}
                    <Link to="/Register" className="text-light">here</Link>
                  </p>
                </div>
              </form>

            </div>

          </div>

          <div className="col-6 text-start m-0 p-0" id="second-box" />
        </div>
      </div>

    </Fragment>
  );
}

export default Login;
