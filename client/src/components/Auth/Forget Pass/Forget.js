import React, {Fragment, useState} from 'react';
import './Forget.css';
import {Link} from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';

function Forget () {
  return (
    <Fragment>
      <Navbar />
      <div
        id="pf-container"
        className="container-fluid justify-content-center row m-0"
      >
        {/* img box */}
        <div className="col-lg-5 col-9 px-0 tetx-center">
          <img
            src="https://i.ibb.co/SyghDTq/image-removebg-preview-1.png"
            alt=""
          />
        </div>
        {/* form box */}
        <div className="col-7 text-center my-5">
          <h1 className="display-1 fw-bolder" id="heading">
            Krishi<span>Seva</span>
          </h1>
          <h3>Forgot Password?</h3>
          {/* OTP boc */}
          {/* TODO add JS in boxes */}
          <form>
            <div className="form-group row">
              <label for="formGroupExampleInput" className="phone_num">
                Phone Number
                <input
                  type="number"
                  name="name"
                  className="form-control my-3"
                  placeholder="Your Phone Number Here"
                  autocomplete="off"
                />
              </label>
              <button
                onclick="{clickHandle}"
                className="btn w-25 text-center"
                id="forgetBtn"
              >
                Recieve Code
              </button>
              <div>
                <div className="prompt">
                  Enter Verification Code
                </div>
                <form
                  method="get"
                  className="digit-group"
                  data-group-name="digits"
                  data-autosubmit="false"
                  autoComplete="off"
                >
                  <input
                    type="text"
                    id="digit-1"
                    name="digit-1"
                    data-next="digit-2"
                  />
                  <input
                    type="text"
                    id="digit-2"
                    name="digit-2"
                    data-next="digit-3"
                    data-previous="digit-1"
                  />
                  <input
                    type="text"
                    id="digit-3"
                    name="digit-3"
                    data-next="digit-4"
                    data-previous="digit-2"
                  />
                  <span className="splitter">–</span>
                  <input
                    type="text"
                    id="digit-4"
                    name="digit-4"
                    data-next="digit-5"
                    data-previous="digit-3"
                  />
                  <input
                    type="text"
                    id="digit-5"
                    name="digit-5"
                    data-next="digit-6"
                    data-previous="digit-4"
                  />
                  <input
                    type="text"
                    id="digit-6"
                    name="digit-6"
                    data-previous="digit-5"
                  />
                  <p className="text-light">
                    If you didn't recieve the verification code
                    {' '}
                    <Link to="#" className="text-light">Resend</Link>
                  </p>
                  <button
                    onclick="{clickHandle}"
                    classname="btn"
                    id="forgetBtn"
                  >
                    Verify Account
                  </button>
                </form>
              </div>

            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Forget;
