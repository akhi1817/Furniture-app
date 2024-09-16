import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <>
   <div className='container-fluid'>
    <div className='row mt-5'>
      <div className='col-md-6 mt-5'>
      <i class="bi bi-envelope fs-2 "></i><h3 className='d-inline-block ms-2 mt-5'>Subscribe to NewsLetter</h3>
      <div className='col-md-12 d-flex mt-5'>
          <input type='text' className='form-control ' placeholder='Enter Your Name'/>
          <input type='email' className='form-control  ms-4' placeholder='Enter Your Email'/>
          <button className='btn btn-success  ms-4'><i class="bi bi-send-fill"></i></button>
      </div>
      </div>
      <div className='col-md-6'>
        <img src='images/sofa.png' alt='sofa frame' className='img-fluid  ms-5' style={{width:'450px',height:'450px'}}/>
      </div>
    </div>
    <div className='row mt-3'>
      <div className='col-md-12 p-3 d-flex flex-colun flex-md-row'>
        <div className='col-md-4'>
          <h2>Furni.</h2>
          <p className='text-secondary'>Donec facilisis quam ut purus rutrum lobortis. <br/>Donec vitae odio quis nisl dapibus malesuada.<br/> Nullam ac aliquet velit. Aliquam vulputate velit <br/>imperdiet dolor tempor tristique. Pellentesque <br/>habitant</p>

        </div>
        <div className='col-md-3 '>
          <h2>Our Pages</h2>
          <Link to='/about' className='nav-link text-dark'><p>About</p></Link>
          <Link to='/service' className='nav-link text-dark'><p>Services</p></Link>
          <Link to='/blog' className='nav-link text-dark'><p>Blog</p></Link>
          <Link to='/contact' className='nav-link text-dark'><p>Contact Us</p></Link>
        </div>
        <div className='col-md-3'>
          <h2>Contact Us</h2>
          <p><strong>Phone:</strong>+91 8177819283</p>
          <p><strong>E-mail:</strong>akhi1718@gmail.com</p>
        </div>
        <div className='col-md-2'>
          <h2>Follow Us</h2>
          <h3 className=''><i class="bi bi-instagram text-danger ms-3"></i><i class="bi bi-facebook text-primary  ms-3"></i><i class="bi bi-twitter-x text-dark  ms-3"></i><i class="bi bi-linkedin text-primary ms-3"></i></h3>

        </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default Footer
