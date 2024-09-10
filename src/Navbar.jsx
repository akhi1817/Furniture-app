import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
 
     <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand-lg bg-success navbar-light">
            <div className="container-fluid">
              <NavLink to="/" className="navbar-brand text-white fw-bold">Furniture App</NavLink>
              <button className="navbar-toggler" type="button"data-bs-toggle="collapse"data-bs-target="#navbarNav"aria-controls="navbarNav"aria-expanded="false"aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item px-3"><NavLink to="/" className="nav-link text-light">Home</NavLink></li>
                  <li className="nav-item px-3"><NavLink to="/shop" className="nav-link text-light">Shop</NavLink></li>
                  <li className="nav-item px-3"><NavLink to="/about" className="nav-link text-light">About us</NavLink></li>
                  <li className="nav-item px-3"><NavLink to="/service" className="nav-link text-light">Services</NavLink></li>
                  <li className="nav-item px-3"><NavLink to="/blog" className="nav-link text-light">Blog</NavLink></li>
                  <li className="nav-item px-3"><NavLink to="/contact" className="nav-link text-light">Contact us</NavLink></li>
                  <li className="nav-item px-3"><NavLink to="/checkout" className="nav-link text-light"><i className="bi bi-person fs-4"></i></NavLink></li>
                  <li className="nav-item px-3"><NavLink to="/cart" className="nav-link text-light"><i className="bi bi-bag-heart-fill fs-4"></i></NavLink></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
       
    
    </>
  )
}

export default Navbar
