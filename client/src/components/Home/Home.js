import React, { Fragment } from 'react'
import './Home.css'
import './../../assets/images/main-bg.jpeg'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
function LandingPage() {
  return (
    <Fragment>


      <Navbar />
      <div className="main-container container-fluid justify-content-center align-itmes-center">
        <div className='row justify-content-center align-items-center'>
          <div className="col-12 col-md-8 text-center mt-5 mt-md-0">
            <h1 className='display-1 fw-bolder' id='heading'>Krishi<span>Seva</span></h1>
            <p id='tagline'>Improving agriculture, improving lives</p>
          </div>
          <h1 className="text text-center mt-lg-3 mt-0 mb-lg-2 mb-0" id='card-heading'>I am a:</h1>

          <div className="card-container col-md-10 col-12 ">
            <div className='row align-items-center justify-content-center justify-content-lg-between'>

              {/* card -1 */}
              <div class="col-6 my-3 mt-1 col-md-4 col-lg-3 option" id='card-1'>
                <div class="card border-0 bg_color">
                  <div class="card-body text-center" id='card-body-1'>
                    <h4 class="card-title text-light">Middleman</h4>
                    {/* Card hover effect */}
                    <div className="overlay justify-content-center align-items-center" id='card-hover-1'>
                      <div className="items"></div>
                      <div className="items head">
                        {/* <h1 className='text-center m-0 desc'>lorem ipsum</h1> */}
                      </div>
                      <div className="items price my-0 row justify-content-center align-items-center cardBox">
                        <p className='text-white hover-card-text text-center m-1'>le jogi khush hai na ab ? aur kuch krna bcha hai toh btaade!</p>
                        <div className='text-center button-container row justify-content-center'>
                          <p className="btn btn-success col-5 col-lg-4 rounded card-buttons m-2 p-md-1 mx-2 btn-sm p-0 " id='login-btn'>Login</p>
                          <p className="btn btn-success col-6 rounded m-lg-2 col-lg-4 card-buttons p-md-1 mx-2 p-0" id='signup-btn'>Sign up</p>
                        </div>
                      </div>
                      <div className="items cart">
                        {/* <i className="fa fa-shopping-cart"></i> */}
                        {/* <span>ADD TO CART</span> */}
                      </div>
                    </div>
                    <a href='#' className='text-decoration-none'><img className='card-img img-fluid' id='middleman-card' src='https://i.ibb.co/7p94TtV/middleman.png'></img>
                    </a>
                  </div>
                </div>
              </div>
              {/* card-2 */}
              <div class="col-6 my-3 col-md-4 col-lg-3" id='card-2'>
                <div class="card border-0 bg_color">
                  <div class="card-body text-center">
                    <h4 class="card-title text-light">Farmer</h4>
                    {/* Card hover effect */}
                    <div className="overlay" id='card-hover-1'>
                      <div className="items"></div>
                      <div className="items head">
                        {/* <h1 className='text-center m-0 desc'>lorem ipsum</h1> */}
                      </div>
                      <div className="items price my-0 row justify-content-center align-items-center cardBox">
                        <p className='text-white hover-card-text text-center m-1'>le jogi khush hai na ab ? aur kuch krna bcha hai toh btaade!</p>
                        <div className='text-center button-container row justify-content-center'>
                          <p className="btn btn-success col-5 col-lg-4 rounded card-buttons m-2 p-md-1 mx-2 btn-sm p-0 " id='login-btn'>Login</p>
                          <p className="btn btn-success col-6 rounded m-lg-2 col-lg-4 card-buttons p-md-1 mx-2 p-0" id='signup-btn'>Sign up</p>
                        </div>
                      </div>
                      <div className="items cart">
                        {/* <i className="fa fa-shopping-cart"></i> */}
                        {/* <span>ADD TO CART</span> */}
                      </div>
                    </div>
                    <a href='#'><img className='card-img' id='farmer-card' src='https://i.ibb.co/qyKKwSd/farmer.png'></img></a>
                  </div>
                </div>
              </div>

              {/* card-3 */}
              <div class="col-6 my-3 col-md-4 col-lg-3" id='card-3'>
                <div class="card border-0 bg_color">
                  <div class="card-body text-center">
                    <h4 class="card-title text-light">Expert  </h4>
                    {/* Card hover effect */}
                    <div className="overlay" id='card-hover-1'>
                      <div className="items"></div>
                      <div className="items head">
                        {/* <h1 className='text-center m-0 desc'>lorem ipsum</h1> */}
                      </div>
                      <div className="items price my-0 row justify-content-center align-items-center cardBox">
                        <p className='text-white hover-card-text text-center m-1'>le jogi khush hai na ab ? aur kuch krna bcha hai toh btaade!</p>
                        <div className='text-center button-container row justify-content-center'>
                          <p className="btn btn-success col-5 col-lg-4 rounded card-buttons m-2 p-md-1 mx-2 btn-sm p-0 " id='login-btn'>Login</p>
                          <p className="btn btn-success col-6 rounded m-lg-2 col-lg-4 card-buttons p-md-1 mx-2 p-0" id='signup-btn'>Sign up</p>
                        </div>
                      </div>
                      <div className="items cart">
                        {/* <i className="fa fa-shopping-cart"></i> */}
                        {/* <span>ADD TO CART</span> */}
                      </div>
                    </div>
                    <a href='#'><img className='card-img' id='expert-card' src='https://i.ibb.co/LpWNPnL/expert.png'></img></a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <footer className="page-footer font-small blue fixed-bottom bg-dark text-light">
        <div className="footer-copyright text-center py-1">
          © 2022 Copyright: HTML5
        </div>
      </footer>
    </Fragment>
  )
}

export default LandingPage