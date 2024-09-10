import React from 'react'

const Home = () => {
  return (
    <>
   <div className="container-fluid bg-warning">
  <div className="row p-5">
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
</div>

    
    </>
  )
}

export default Home
