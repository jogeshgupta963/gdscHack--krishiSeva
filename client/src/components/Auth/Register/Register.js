import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import './Register.css';
import axios from 'axios';
import {signup} from '../../../redux/auth';
import {useDispatch, useSelector} from 'react-redux';

function Register () {
  const [name, setName] = useState ('');
  const [phnNum, setPhnNum] = useState (0);
  const [password, setPassword] = useState ('');
  const [confirmPassword, setConfirmPassword] = useState ('');

  const {isLoggedIn} = useSelector (state => state.auth);

  const dispatch = useDispatch ();

  const clickHandle = async e => {
    e.preventDefault ();

    var user;

    if (password === confirmPassword) {
      user = await axios.post ('http://localhost:3000/api/v1/user/signup', {
        name,
        phoneNumber: phnNum,
        password,
      });
    }

    // console.log(typeof user.data.status);
    // if (!user.data.status) console.log ('errrr');

    // dispatch (signup ());
    // };
    // console.log (isLoggedIn);

    if (!user.data.status) console.log (user.data.msg);
    dispatch (signup ());
  };

  return (
    <Fragment>
      <Navbar />

      {/* TODO Link pages */}
      <div className="main_container container-fluid">
        <div className="row  align-items-center">
          <div className="col-6 text-start m-0 p-0" id="main-box_1">
            <div className="text_box ms-md-5 mt-md-3">
              <h1 className="display-1 fw-bolder" id="heading">
                Krishi<span>Seva</span>
              </h1>
              <h3 className="mt-2">Hello there!</h3>
              <h3>Sign up to get started with KrishiSeva</h3>
            </div>

            <div className="form_box">
              <form>
                <div className="form-group row ms-5 mt-5">
                  <label for="formGroupExampleInput">
                    Full Name
                    <input
                      type="text"
                      name="name"
                      className="form-control my-3 w-50"
                      placeholder="Your Full Name Here"
                      onChange={e => setName (e.target.value)}
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
                      onChange={e => setPhnNum (e.target.value)}
                    />
                  </label>

                  {/* dropwdown */}
                  <div>
                    <label htmlFor="type" className="mb-2 mt-3">
                      You are a:
                    </label>
                    <select
                      name="type"
                      id="type"
                      className="form-control mb-3 w-25 text-light border-0"
                    >
                      <option value="volvo">Farmer</option>
                      <option value="saab">MiddleMan</option>
                      <option value="opel">Expert</option>
                    </select>
                  </div>

                  <label for="inputPassword6">
                    Password
                    <input
                      type="password"
                      name="name"
                      className="form-control my-3 w-50"
                      placeholder="Your Password Here"
                      onChange={e => setPassword (e.target.value)}
                    />
                  </label>
                  <label forhtml="inputPassword6">
                    Confirm Password
                    <input
                      type="password"
                      name="name"
                      className="form-control my-3 w-50"
                      placeholder="Re-Enter your Password Here"
                      onChange={e => setConfirmPassword (e.target.value)}
                    />
                  </label>

                  <button
                    onClick={clickHandle}
                    className="btn text-center text-light fw-bold mt-4 w-50 px-0 mx-2 py-2"
                    id="signUp_btn"
                  >
                    Signup
                  </button>
                  {/* <button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(signup());
                    }}
                  >
                    Signup
                  </button> */}
                  {/* <Link
                    
                    
                  >
                    Signup
                  </button>
                  {/* <Link
                    to="#"
                    
                    onClick={clickHandle}
                  >
                    Sign Up

                  </Link>
                   </Link> */}
                  <p className="text-light mt-3 ms-5 ms-md-2">
                    Already have an account? Login
                    {' '}
                    <Link to="/Login" className="text-light">here</Link>
                  </p>

                </div>
              </form>
            </div>
          </div>

          <div className="col-6 text-start m-0 p-0" id="img_box" />

          {/* <div className="col-6 text-start m-0 p-0" id="img_box" /> */}

        </div>
      </div>
      <div />
    </Fragment>
  );
}

export default Register;
