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
            <h1 className='display-1 fw-bolder' id='heading'>Krishi <span>Sewa</span></h1>
            <p id='tagline'>Improving agriculture, improving lives</p>
          </div>
          <h1 className="text text-center mt-lg-3 mt-0 mb-lg-2 mb-0" id='card-heading'>I am a:</h1>

          <div className="card-container col-md-10 col-12 ">
            <div className='row align-items-center justify-content-center justify-content-lg-between'>

              {/* card -1 */}
              <div class="col-6 my-3 mt-1 col-md-4 option" id='card-1'>
                <div class="card border-0 bg-success">
                  <div class="card-body text-center">
                    <h4 class="card-title text-light">Middleman</h4>
                    <img className='card-img img-fluid' id='middleman-card' src='https://i.ibb.co/7p94TtV/middleman.png'></img>
                  </div>
                </div>


              </div>
              {/* card-2 */}
              <div class="col-6 my-3 col-md-4" id='card-2'>
                <div class="card border-0 bg-success">
                <div class="card-body text-center">
                  <h4 class="card-title text-light">Farmer</h4>
                    <img className='card-img' id='farmer-card' src='https://i.ibb.co/qyKKwSd/farmer.png'></img>
                </div>
              </div>
              </div>

              {/* card-3 */}
              <div class="col-6 my-3 col-md-4" id='card-3'>
                <div class="card border-0 bg-success">
                <div class="card-body text-center">
                  <h4 class="card-title text-light">Expert  </h4>
                    <img className='card-img' id='expert-card' src='https://i.ibb.co/LpWNPnL/expert.png'></img>
                </div>
              </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* <footer className="page-footer font-small blue fixed-bottom">
        <div className="footer-copyright text-center py-3">
          © 2022 Copyright: HTML5
        </div>
      </footer> */}
    </Fragment>
  )
}

export default LandingPage