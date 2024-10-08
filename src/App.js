import React, { useEffect } from 'react';
import AOS from 'aos';

import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Shop from './Shop';
import About from './About';
import Service from './Service';
import Blog from './Blog';
import Contact from './Contact';
import Checkout from './Checkout';
import Cart from './Cart';
import Footer from './Footer';

const App = () => {

  useEffect(()=>{
    AOS.init({
      duration: 2000,
      once: true,
    },[]);
  })
  return (
    <>
    
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/cart' element={<Cart/>}/>
      {/* <Route path='/footer' element={<Footer/>}/> */}
      
    </Routes>
    <Footer/>
  </Router>
    </>
  )
}

export default App
