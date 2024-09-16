import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <div className='container-fluid'>
      <div className='row mt-5  '>
      <h1 className='text-dark text-center'>Our Team</h1>

        <div className='col-md-12 d-flex p-5'>
          <div className='col-md-3 ms-2'>
            <div className='card'>
              <div className='card-body text-center'>
                <img src='images/person_1.jpg' className='img-fluid' style={{height:'250px'}}/>
                <h2>Lawson Arnold</h2>
                <p className='text-secondary'>CEO,Founder</p>
                <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <Link to='/' className='link fw-bold text-dark '>Learn More</Link>
              </div>
            </div>
          </div>
          <div className='col-md-3 ms-2'>
            <div className='card'>
              <div className='card-body text-center'>
                <img src='images/person_2.jpg' className='img-fluid' style={{height:'250px'}}/>
                <h2>Jeremy Walker</h2>
                <p className='text-secondary'>CEO,Founder</p>
                <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <Link to='/' className='link fw-bold text-dark '>Learn More</Link>
              </div>
            </div>
          </div>
          <div className='col-md-3 ms-2'>
            <div className='card'>
              <div className='card-body text-center'>
                <img src='images/person_3.jpg' className='img-fluid' style={{height:'250px'}}/>
                <h2>Patrick White</h2>
                <p className='text-secondary'>CEO,Founder</p>
                <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <Link to='/' className='link fw-bold text-dark '>Learn More</Link>
              </div>
            </div>
          </div>
          <div className='col-md-3 ms-2'>
            <div className='card'>
              <div className='card-body text-center'>
                <img src='images/person_4.jpg' className='img-fluid' style={{height:'250px'}}/>
                <h2>Kathryn Ryan</h2>
                <p className='text-secondary'>CEO,Founder</p>
                <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <Link to='/' className='link fw-bold text-dark '>Learn More</Link>
              </div>
            </div>
          </div>
        </div>
        {/* testimonials */}
        <div className='col-md-12 mb-5 bg-light mt-5'>
    <div className='row'>
      <h1 data-aos='fade-up' className='text-dark text-center'>Testimonials</h1>
    
      <div  data-aos='fade-up'  id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div  className="col-md-12 px-5">
                <div  data-aos='flip-right'  className="card px-5">
                  <div className="card-body text-center px-5">
                    <p className="text-secondary px-5">"I couldn't be happier with my experience at FurnitureApp! The quality of the furniture is top-notch, and the sleek, modern designs perfectly complement my home decor. The team was incredibly helpful in guiding me through the process, making it a breeze to find the right pieces. Highly recommend!"</p>
                    <img src="images/person-1.jpg" alt='testimonials' className="img-fluid rounded rounded-circle" style={{ width: '100px', height: '100px' }} />
                    <h6>Maria Jones</h6>
                    <p className="text-secondary">CEO, ABC.Ltd</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-12 px-5">
                <div  data-aos='flip-right'  className="card px-5">
                  <div className="card-body text-center px-5">
                    <p className="text-secondary px-5">"What I love most about FurnitureApp is the attention to detail and the craftsmanship of their products. The furniture is not only stylish but also durable. I was impressed with the seamless ordering process and how easy it was to customize pieces to fit my space. An excellent experience all around!"</p>
                    <img src="images/person-2.jpg" alt='testimonials' className="img-fluid rounded rounded-circle" style={{ width: '100px', height: '100px' }} />
                    <h6>Peter England</h6>
                    <p className="text-secondary">Founder, LMN.Ltd</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-12 px-5">
                <div  data-aos='flip-right'  className="card px-5">
                  <div className="card-body text-center px-5">
                    <p className="text-secondary px-5">"FurnitureApp truly exceeded my expectations! The variety of furniture styles they offer is amazing, and I was able to find exactly what I needed to complete my living room. The delivery was quick, and the customer service was exceptional. I'll definitely be shopping here again!"</p>
                    <img src="images/person-3.jpeg" alt='testimonials' className="img-fluid rounded rounded-circle" style={{ width: '100px', height: '100px' }} />
                    <h6>John Marshall</h6>
                    <p className="text-secondary">CFO, XYZ.Ltd</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
      </div>

    </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
