import React, {Fragment} from 'react';
import './Reset.css';
import {Link} from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
export default function Reset () {
  return (
    <Fragment>
      <Navbar />
      {/* Form Box */}
      <div className="reset-container container-fluid justify-content-center row">
        <div className="form-container col-6 row justify-content-center">
          <h1 className="display-1 fw-bolder text-center" id="heading">
            Krishi<span>Seva</span>
          </h1>
          <h3 className="text-light text-center">Reset Password</h3>

          <div className="form_box">
            <form>
              <div className="form-group">
                <label for="inputPassword6">
                  New Password Here
                  <input
                    type="password"
                    name="name"
                    className="form-control"
                    placeholder="Password must be atleast of 8 characters"
                  />
                </label>
                <label forhtml="inputPassword6">
                  Confirm new Password
                  <input
                    type="password"
                    name="name"
                    className="form-control"
                    placeholder="Re-Enter your new Password Here"
                  />
                </label>
              </div>
            </form>
          </div>

        </div>
      </div>
    </Fragment>
  );
}
