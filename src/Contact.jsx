import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12 mt-5 p-5 d-flex text-center'>
          <div className='col-md-4 d-flex p-5 '>
            <button className='btn btn-success rounded'><i class="bi bi-geo-alt-fill"></i></button>
            <p className='text-secondary fw-bold ms-3 '>43 Raymouth Rd.humpi,Karnataka</p>
          </div>
          <div className='col-md-4 d-flex p-5'>
            <button className='btn btn-success rounded'><i class="bi bi-envelope-fill"></i></button>
            <p className='text-secondary fw-bold ms-3'>akhi1718@gmail.com</p>
          </div>
          <div className='col-md-4 d-flex p-5 '>
            <button className='btn btn-success rounded '><i class="bi bi-telephone-fill"></i></button>
            <p className='text-secondary fw-bold ms-3 '>+91 7057761632</p>
          </div>
        </div>
      </div>
      <div className='row  justify-content-center align-items-center'>
        <div className='col-md-12 p-5'>
          <form>
            <div className='col-md-12 mt-4 d-flex  rounded text-center'>
            <div className='col-md-6 me-1'>
              <input type='text' className='form-control ' placeholder='First Name'/>
            </div>
            <div className='col-md-6 ms-1'>
              <input type='text' className='form-control ' placeholder='Last Name'/>
            </div>
            </div>
            <div className='col-md-12 mt-4 '>
              <input type='email' className='form-control w-100' placeholder='Email Address'/>
            </div>
            <div className='col-md-12 mt-4 '>
              <textarea rows='4' cols='50' className='form-control ' placeholder='Message'/>
            </div>
            <button className='btn btn-dark text-white rounded-pill fw-bold mt-5 px-4 my-5'>Send Message</button>
            
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
