import React from 'react'

const Home = () => {
  return (
    <>
   <div className="container-fluid">
  <div className="row p-5 bg-warning">
    <div className="col-md-12 d-flex flex-column flex-md-row">
      <div className="col-md-6 col-12 pt-5">
        <h1 className="text-white text-center text-md-start">Modern Interior Design<br />Studio</h1>
        <p className="text-light text-center text-md-start">
          Welcome to One8 furnicommune, where comfort meets style.<br />
          Discover our curated collection of timeless furniture designed<br />
          to elevate your living space with elegance and functionality.
        </p>
        <div className="text-center text-md-start">
          <button className="rounded-pill btn btn-success px-4 py-2 my-3 mx-3">Shop Now</button>
          <button className="rounded-pill btn btn-outline-success px-4 py-2 my-3 mx-3">Explore</button>
        </div>
      </div>
      <div className="col-md-6 col-12 d-flex justify-content-center pt-5">
        <img src="images/couch.png" alt="sofa hero" className="img-fluid" />
      </div>
    </div>
  </div>
  <div className='col-md-12 p-5'>
    <div className='row mt-5'>
      <div className='col-md-12 d-flex'>
        <div className='col-md-3 p-3'>
          <h2>Crafted with excellent material.</h2>
          <p>Welcome to our exquisite range of furniture, where style meets functionality. Our collection features a diverse array of high-quality pieces designed to enhance any living space.
             Whether you're looking for modern, classic, or contemporary designs, our selection has something to suit every taste and need.</p>
          <button className='btn btn-dark  rounded-pill px-5 py-2 mx-3'>Explore</button>
        </div>
        <div className='col-md-3 p-3'>
          <div className='card'>
            <div className='card-body text-center'>
              <img src='images/product-1.png' className='img-fluid' style={{width:'300px',height:'300px'}}/>
              <h5>Nordic Chair</h5>
              <h2>$50.00</h2>
            </div>
            <div className='card-footer text-center'>
              <button className='btn btn-success rounded px-2 mx-2'>Add to Cart</button>
              <button className='btn btn-primary rounded px-2 mx-2'>Buy Now</button>
              
            </div>
          </div>
        </div>
        <div className='col-md-3 p-3'>
          <div className='card'>
            <div className='card-body text-center'>
              <img src='images/product-2.png' className='img-fluid' style={{width:'300px',height:'300px'}}/>
              <h5>Kruzo Aero Chair</h5>
              <h2>$78.00</h2>
            </div>
            <div className='card-footer text-center'>
              <button className='btn btn-success rounded px-2 mx-2'>Add to Cart</button>
              <button className='btn btn-primary rounded px-2 mx-2'>Buy Now</button>
              
            </div>
          </div>
        </div>
        <div className='col-md-3 p-3'>
          <div className='card'>
            <div className='card-body text-center'>
              <img src='images/product-3.png' className='img-fluid' style={{width:'300px',height:'300px'}}/>
              <h5>Ergonomic Chair</h5>
              <h2>$43.00</h2>
            </div>
            <div className='card-footer text-center'>
              <button className='btn btn-success rounded px-2 mx-2'>Add to Cart</button>
              <button className='btn btn-primary rounded px-2 mx-2'>Buy Now</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className='col-md-12 p-5'>
    <div className='row'>
      <div className='col-md-12'>
        <div className='col-md-6'>
            <h1>Why Choose Us</h1>
            <p className='text-secondary'>Choose us for top-quality furniture that combines durability with style at affordable prices. 
              Our diverse selection caters to every taste, from modern to classic, and our customization options ensure your 
              pieces reflect your unique taste. Enjoy a seamless shopping experience with excellent customer service and 
              reliable delivery,making us your go-to choice for exceptional furniture and outstanding service.</p>
            <div className='col-md-3'>
            <i class="bi bi-truck fs-1"></i>
            
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
