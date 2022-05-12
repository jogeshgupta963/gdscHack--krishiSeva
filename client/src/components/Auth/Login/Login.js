import React, { Fragment, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import "./Login.css";

import { login } from "../../../redux/auth";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";

function Login() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // const [phnNum, setPhnNum] = useState(0);
  // const [password, setPassword] = useState("");

  const phnNum = useRef(0);
  const password = useRef("");

  async function clickHandle(e) {
    e.preventDefault();

    axios.defaults.withCredentials = true;
    let userLogin = await axios.post(
      "http://localhost:3000/api/v1/user/login",
      { phoneNumber: phnNum.current.value, password: password.current.value }
    );
    console.log(userLogin);

    if (!userLogin.data.status) {
      console.log(userLogin.data.msg);
    }
    // <Navigate to="/dashboard" />
    window.location.reload()
  }

  return (
    <Fragment>
      {Cookies.get("JWT") && <Navigate to="/dashboard" />}
      <Navbar />

      <div className="main_container container-fluid">
        <div className="row  align-items-center">
          <div className="col-6 text-start m-0 p-0" id="main-box">
            <div className="text_box ms-md-5 mt-md-5">
              <h1 className="display-1 fw-bolder py-5 my-5" id="heading">
                Krishi<span>Seva</span>
              </h1>
              <h3 className="mt-3">Hello there!</h3>
              <h1 className="login">Welcome Back</h1>
              <h3>Login to your KrishiSeva account</h3>
            </div>

            <div className="form_box">
              <form onSubmit={clickHandle} >
                <div className="form-group row ms-5 mt-5">
                  <label for="formGroupExampleInput">
                    Phone Number
                    <input
                      type="number"
                      name="name"
                      className="form-control my-3 w-50"
                      placeholder="Your Phone Number Here"
                      autocomplete="off"
                      // onChange={(e) => setPhnNum(e.target.value)}
                      ref={phnNum}
                    />
                  </label>
                  <label for="inputPassword6">
                    Password
                    <input
                      type="password"
                      name="name"
                      className="form-control my-3 w-50"
                      placeholder="Your Password Here"
                      // onChange={(e) => setPassword(e.target.value)}
                      ref={password}
                    />
                  </label>
                  <div class="form-check ms-3">
                    <input
                      className="form-check-input"
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

                  <button
                    // onClick={clickHandle}
                    className="btn text-center text-light fw-bold mt-4 w-50 px-0 mx-3 py-2"
                    id="login_btn"
                  >
                    Login
                  </button>
                  {/* <Link
                    // to="/LandingPage"
                   
                    // onClick={clickHandle}
                  >
                    Login
                  </Link> */}
                  <p className="text-light mt-3 ms-2">
                    Don't have an account? Sign up{" "}
                    <Link to="/Register" className="text-light">
                      here
                    </Link>
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
