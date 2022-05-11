import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import './LandingPage.css';
import Navbar from '../Navbar/Navbar';
function LandingPage () {
  return (
    <Fragment>
      <Navbar />
      <div class="container-fluid main-container_1">

        {/* < img src = 'https://i.ibb.co/r4mq8nd/agrigator-digital-farming-platform-pic-ds1-1.jp' > </img> */}
        <div
          class="position-relative top-50 start-0 translate-middle-y mx-md-5 mx-3 d-none d-md-block p-3"
          id="main_text_box-1"
        >
          <h1 id="landing-pg_heading">Lorem ipsum</h1>
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Molestias eveniet ut, maxime
          tenetur reprehenderit animi nemo temporibus quod minus cupiditate porro incidunt ratione fuga, delectus
          voluptatem dolorem placeat culpa officia?

          <div id="button-box">
            <Link to="#bottom" className="btn text-light mt-4 me-3" id="btn-1">
              Get Started
            </Link>
            <Link to="#" className="btn mt-3 mt-lg-4 text-light" id="btn-2">
              Learn More
            </Link>
          </div>
        </div>

        <div
          class="position-absolute top-50 start-50 translate-middle w-75 d-block d-md-none text-center p-3"
          id="main_text_box-2"
        >
          <h1 id="landing-pg_heading">Lorem ipsum</h1>
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Molestias eveniet ut, maxime
          tenetur reprehenderit animi nemo temporibus quod minus cupiditate porro incidunt ratione fuga, delectus
          voluptatem dolorem placeat culpa officia?

          <div id="button-box">
            <Link to="#bottom" className="btn text-light mt-4 mx-3" id="btn-1">
              Get Started
            </Link>
            <Link to="#" className="btn mt-4 text-light" id="btn-2">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Container 2 */}

      <section
        class="container-fluid main-container_2 row justify-content-center align-items-center py-5"
        id="bottom"
      >
        {/* card-1 */}
        <Link
          to="#"
          className="text-decoration-none text-light col-lg-4 col-md-6 justify-content-center row align-items-center"
        >
          <div
            class=" col-lg-9 col-xl-7 col-md-8 col-sm-6 col-12 my-3 option"
            id="card-1"
          >
            <div class="card border-0 bg_color">
              <div class="card-body text-center" id="card-body-1">
                <img
                  src="https://i.ibb.co/LRrNpJn/Vector.png"
                  alt="collaborate"
                  className="img-fluid my-3"
                  width={'100em'}
                />
                <h4 class="card-title text-light">Collaborate</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat soluta temporibus non vero.
                </p>
              </div>
            </div>
          </div>
        </Link>
        {/* card-2 */}
        <Link
          to="#"
          className="text-decoration-none text-light col-lg-4 col-md-6 justify-content-center row align-items-center"
        >
          <div
            class=" col-lg-9 col-xl-7 col-md-8 col-sm-6 col-12 my-3 option"
            id="card-1"
          >
            <div class="card border-0 bg_color">
              <div class="card-body text-center" id="card-body-1">
                <img
                  src="https://i.ibb.co/QchJjBq/Money.png"
                  alt="collaborate"
                  className="img-fluid my-3"
                  width={'100em'}
                />
                <h4 class="card-title text-light">Loan</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat soluta temporibus non vero.
                </p>
              </div>
            </div>
          </div>
        </Link>
        {/* card-3 */}
        <Link
          to="#"
          className="text-decoration-none text-light col-lg-4 col-md-6 justify-content-center row align-items-center"
        >
          <div
            class=" col-lg-9 col-xl-7 col-md-8 col-sm-6 col-12 my-3 option"
            id="card-1"
          >
            <div class="card border-0 bg_color">
              <div class="card-body text-center" id="card-body-1">
                <img
                  src="https://static.thenounproject.com/png/1176474-200.png"
                  alt="collaborate"
                  className="img-fluid my-3 black-img"
                  width={'100em'}
                />
                <h4 class="card-title text-light">Awareness</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat soluta temporibus non vero.
                </p>
              </div>
            </div>
          </div>
        </Link>
        {/* card-4 */}
        <Link
          to="#"
          className="text-decoration-none text-light col-lg-4 col-md-6 justify-content-center row align-items-center"
        >
          <div
            class=" col-lg-9 col-xl-7 col-md-8 col-sm-6 col-12 my-3 option"
            id="card-1"
          >
            <div class="card border-0 bg_color">
              <div class="card-body text-center" id="card-body-1">
                <img
                  src="https://i.ibb.co/vV885TV/Consultation.png"
                  alt="collaborate"
                  className="img-fluid my-3"
                  width={'100em'}
                />
                <h4 class="card-title text-light">Expert Advice</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat soluta temporibus non vero.
                </p>
              </div>
            </div>
          </div>
        </Link>
        {/* card-5 */}
        <Link
          to="#"
          className="text-decoration-none text-light col-lg-4 col-md-6 justify-content-center row align-items-center"
        >
          <div
            class=" col-lg-9 col-xl-7 col-md-8 col-sm-6 col-12 my-3 option"
            id="card-1"
          >
            <div class="card border-0 bg_color">
              <div class="card-body text-center" id="card-body-1">
                <img
                  src="https://i.ibb.co/Rcgv1Hm/Vector-1.png"
                  alt="collaborate"
                  className="img-fluid my-3"
                  width={'100em'}
                />
                <h4 class="card-title text-light">ChatBot</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat soluta temporibus non vero.
                </p>
              </div>
            </div>
          </div>
        </Link>

      </section>
    </Fragment>
  );
}

export default LandingPage;
