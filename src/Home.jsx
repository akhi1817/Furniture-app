import React from 'react'

const Home = () => {
  return (
    <>
   <div className="container-fluid">
  <div className="row p-5 bg-warning">
    <div className="col-md-12 d-flex flex-column flex-md-row">
      <div className="col-md-6 col-12 pt-5">
        <h1 data-aos="fade-down" className="text-white text-center text-md-start">Modern Interior Design<br />Studio</h1>
        <p data-aos="fade-up" className="text-light text-center text-md-start">
          Welcome to One8 furnicommune, where comfort meets style.<br />
          Discover our curated collection of timeless furniture designed<br />
          to elevate your living space with elegance and functionality.
        </p>
        <div data-aos="fade-up" className="text-center text-md-start">
          <button className="rounded-pill btn btn-success px-4 py-2 my-3 mx-3">Shop Now</button>
          <button className="rounded-pill btn btn-outline-success px-4 py-2 my-3 mx-3">Explore</button>
        </div>
      </div>
      <div data-aos="fade-right" className="col-md-6 col-12 d-flex justify-content-center pt-5">
        <img src="images/couch.png" alt="sofa hero" className="img-fluid" />
      </div>
    </div>
  </div>
  {/* shop */}
  <div className='col-md-12 p-5 bg-light'>
    <div className='row mt-5'>
      <div className='col-md-12 d-flex flex-column flex-md-row'>
        <div data-aos="fade-right" className='col-md-3 p-3'>
          <h2>Crafted with excellent material.</h2>
          <p>Welcome to our exquisite range of furniture, where style meets functionality. Our collection features a diverse array of high-quality pieces designed to enhance any living space.
             Whether you're looking for modern, classic, or contemporary designs, our selection has something to suit every taste and need.</p>
          <button className='btn btn-dark  rounded-pill px-5 py-2 mx-3'>Explore</button>
        </div>
        <div data-aos="zoom-in-up" className='col-md-3 p-3'>
          <div className='card'>
            <div className='card-body text-center'>
              <img src='images/product-1.png' alt='products' className='img-fluid' style={{width:'300px',height:'300px'}}/>
              <h5>Nordic Chair</h5>
              <h2>$50.00</h2>
            </div>
            <div className='card-footer text-center'>
              <button className='btn btn-success rounded px-2 py-2 mx-2 my-2'>Add to Cart</button>
              <button className='btn btn-primary rounded px-2 py-2 mx-2 my-2'>Buy Now</button>
              
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-up" className='col-md-3 p-3'>
          <div className='card'>
            <div className='card-body text-center'>
              <img src='images/product-2.png' alt='products' className='img-fluid' style={{width:'300px',height:'300px'}}/>
              <h5>Kruzo Aero Chair</h5>
              <h2>$78.00</h2>
            </div>
            <div className='card-footer text-center'>
              <button className='btn btn-success rounded px-2 py-2 my-2 mx-2'>Add to Cart</button>
              <button className='btn btn-primary rounded px-2 py-2 my-2 mx-2'>Buy Now</button>
              
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-up" className='col-md-3 p-3'>
          <div className='card'>
            <div className='card-body text-center'>
              <img src='images/product-3.png' alt='products' className='img-fluid' style={{width:'300px',height:'300px'}}/>
              <h5>Ergonomic Chair</h5>
              <h2>$43.00</h2>
            </div>
            <div className='card-footer text-center'>
              <button className='btn btn-success rounded px-2 py-2 my-2 mx-2'>Add to Cart</button>
              <button className='btn btn-primary rounded px-2 py-2 my-2 mx-2'>Buy Now</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* why choose us */}
  <div className='col-md-12 p-5 bg-light'>
    <div className='row'>
      <div className='col-md-12 d-flex flex-column flex-md-row'>
        <div data-aos="zoom-in-down" className='col-md-6'>
            <h1>Why Choose Us</h1>
            <p className='text-secondary'>Choose us for top-quality furniture that combines durability with style at affordable prices. 
              Our diverse selection caters to every taste, from modern to classic, and our customization options ensure your 
              pieces reflect your unique taste. Enjoy a seamless shopping experience with excellent customer service and 
              reliable delivery,making us your go-to choice for exceptional furniture and outstanding service.</p>
              <div className='col-md-12 d-flex flex-column flex-md-row'>
                  <div data-aos="fade-right" className='col-md-6'>
                    <i class="bi bi-truck fs-1"></i>
                    <p className='fw-bold'>Fast and Free Shipping</p>
                    <p>"Enjoy fast and reliable shipping on all our furniture items.
                    We prioritize delivering your products safely and on time.
                    Best of all, shipping is absolutely free!"</p>
                  </div>
                  <div data-aos="fade-left" className='col-md-6'>
                    <i class="bi bi-bag-check-fill fs-1"></i>
                    <p className='fw-bold'>Easy to shop</p>
                    <p>Shopping for furniture has never been easier!
                      Enjoy fast, reliable, and free shipping on all orders.
                      We make it simple and convenient, right to your door.</p>
                  </div>
              </div>
              <div className='col-md-12 d-flex flex-column flex-md-row'>
                  <div data-aos="fade-right" className='col-md-6'>
                    <i class="bi bi-stopwatch-fill fs-1 "></i>
                    <p className='fw-bold'>24/7 Support</p>
                    <p>We're here for you 24/7, ready to assist with any questions.
                    Get reliable support anytime, day or night!</p>
                  </div>
                  <div data-aos="fade-left" className='col-md-6'>
                  <i class="bi bi-arrow-left-right fs-1"></i>
                    <p className='fw-bold'>Hassle-free Returns</p>
                    <p>Enjoy peace of mind with our hassle-free returns.
                      Returning items is quick, easy, and stress-free.
                      Your satisfaction is always our top priority.</p>
                  </div>
              </div>
          </div>
          <div data-aos="flip-right" className='col-md-6 p-5 ms-5 justify-content-center '>
            <img src='images/why-choose-us-img.jpg' alt='interior design' className='img-fluid rounded' style={{width:'450px',height:'500px'}}/>
          </div>
      </div>
    </div>
  </div>
  {/* interior design */}
  <div className='col-md-12 bg-light'>
    <div className='row '>
      <div className='col-md-12 d-flex p-3 flex-column flex-sm-row'>
      <div className='col-md-7 ms-5'>
        <img data-aos='fade-right' src='images/img-grid-1.jpg' alt='interior design' className='img-fluid rounded' style={{ width:'400px',height:'500px',position:'relative'}}/>
        <img data-aos='fade-down' src='images/img-grid-2.jpg'  alt='interior design' className='img-fluid rounded' style={{ width:'220px',height:'200px',position:'relative',bottom:'150px',left:'10px'}}/>
        <img data-aos='fade-left' src='images/img-grid-3.jpg'  alt='interior design' className='img-fluid rounded' style={{ width:'360px',height:'400px',position:'relative',bottom:'280px',left:'270px'}}/>
      </div>
      <div data-aos='flip-left' className='col-md-4 me-5'>
        <h2>We Help You To Make Modern Interior Design</h2>
        <p className='text-secondary'>At our core, we specialize in transforming spaces into modern, stylish interiors that reflect your personal taste and lifestyle.
          Our team of experienced designers combines creativity with functionality, ensuring each design not only looks stunning but also serves practical needs.
          From sleek, minimalist furniture to contemporary lighting, we bring together the latest trends to craft unique, inviting spaces. Whether you're looking to renovate your home or office,
          we work closely with you to bring your vision to life.  Trust us to elevate your interior with modern elegance and comfort.</p>
        <button className='btn btn-dark   rounded-pill px-5 py-2 mx-3 my-4'>Explore</button>
      </div>
      </div>
     
      
    </div>
  </div>
  {/* Testimonials */}
  <div className='col-md-12 mb-5 bg-light'>
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
  {/* Blog */}
  <div className='col-md-12 bg-light'>
    <div className='row '>
      <h1 className='text-dark  mt-5'>Recent Blogs</h1>
      <div className='col-md-12 d-flex p-5 flex-column flex-md-row'>
        <div className='col-md-4 mx-2 p-2'>
          <div  data-aos='fade-left'  className='card'>
            <div className='card-body text-center '>
              <img src='images/post-1.jpg' alt='blog post' className='img-fluid rounded ' style={{width:'300px', height:'300px'}}/>
            </div>
            <div className='card-footer'>
              <h5>First Time Home Owner Ideas</h5>
              <p className='text-secondary'>by <strong className='text-dark'>Kristin Watson</strong> on <strong className='text-dark'>Dec 19, 2021</strong></p>
            </div>
          </div>
        </div>
        <div className='col-md-4 mx-2 p-2'>
          <div  data-aos='zoom-in'  className='card'>
            <div className='card-body text-center '>
              <img src='images/post-2.jpg' alt='blog post' className='img-fluid rounded ' style={{width:'300px', height:'300px'}}/>
            </div>
            <div className='card-footer'>
              <h5>How To Keep Your Furniture Clean</h5>
              <p className='text-secondary'>by <strong className='text-dark'>Robert Fox</strong> on <strong className='text-dark'>Dec 15, 2021</strong></p>
            </div>
          </div>
        </div>
        <div className='col-md-4 mx-2 p-2'>
          <div  data-aos='fade-right'  className='card'>
            <div className='card-body text-center '>
              <img src='images/post-3.jpg' alt='blog post' className='img-fluid rounded ' style={{width:'300px', height:'300px'}}/>
            </div>
            <div className='card-footer'>
              <h5>Small Space Furniture Ideas</h5>
              <p className='text-secondary'>by <strong className='text-dark'>Kraigg Ervine</strong> on <strong className='text-dark'>Dec 12, 2021</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>    
    </>
  )
}

export default Home
