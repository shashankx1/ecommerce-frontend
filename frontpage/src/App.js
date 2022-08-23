import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleImageSlider from "react-simple-image-slider";
import Aboutus from "./Aboutus";
import Home from "./Home";
import Contact from "./Contact";
import Shop from "./Shop";
import{BrowserRouter, Routes, Route} from "react-router-dom";
import {Link} from 'react-router-dom'






function App() {

  return (
    <BrowserRouter>
      
        <div className='fullnavbar   bg-secondary contaniner '>
    <div>
      <h1>Furniture Store</h1>
    </div>
    <div className='navbar'>
      <Link className='L1' to="/"> HOME</Link>
      <Link className='L2' to="/shop"> Shop</Link>
      <Link className='L3' to="/aboutus" >About</Link>
      <Link className='L4' to="/contact">CONTACT US</Link>
    </div>
  
    </div> 
    <Routes>
      <Route path="/" element= {<Home />}/>
      <Route path="/aboutus" element= {<Aboutus />}/>
      <Route path="/contact" element= {<Contact />}/>
      <Route path="/shop" element= {<Shop />}/>
         
    </Routes>
    </BrowserRouter>
  );
}

export default App;
