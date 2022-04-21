import React from 'react'
import './LandingPage.css'
function LandingPage() {
  return (

<div class="container-lg main-container">
  {/* < img src = 'https://i.ibb.co/r4mq8nd/agrigator-digital-farming-platform-pic-ds1-1.jp' > </img> */}
            <div class="position-absolute top-50 start-0 translate-middle-y mx-md-5 mx-3 d-none d-md-block p-3" id="main_text_box-1">
                <h1>Lorem ipsum</h1>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Molestias eveniet ut, maxime
                tenetur reprehenderit animi nemo temporibus quod minus cupiditate porro incidunt ratione fuga, delectus
                voluptatem dolorem placeat culpa officia?
                
              <div id = "button-box">
                <a className='btn btn-primary mt-4 me-3' id='btn-1'>Get Started</a>
                <a className='btn mt-3 mt-lg-4 text-light' id='btn-2'>Learn More</a>
              </div>
            </div>


            <div class="position-absolute top-50 start-50 translate-middle w-75 d-block d-md-none text-center p-3" id="main_text_box-2">
                <h1>Lorem ipsum</h1>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Molestias eveniet ut, maxime
                tenetur reprehenderit animi nemo temporibus quod minus cupiditate porro incidunt ratione fuga, delectus
                voluptatem dolorem placeat culpa officia?
                
              <div id = "button-box">
                <a className='btn btn-primary mt-4 mx-3' id='btn-1'>Get Started</a>
                <a className='btn mt-4 text-light' id='btn-2'>Learn More</a>
              </div>
            </div>
    </div>
  )
}

export default LandingPage