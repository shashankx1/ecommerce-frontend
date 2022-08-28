import React from 'react';
import './App.css';
import Aboutus from "./Aboutus";
import Home from "./Home";
import Contact from "./Contact";
import Shop from "./Shop";
import Product from "./Product";
import Login from "./Login";
import Register from "./Register";
import Createcategory from "./createcategory";
import Catogerylist from "./Catogerylist"
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
      <Route path="/product" element= {<Product/> }/>
      <Route path="/Login" element= {<Login/> }/>
      <Route path="/Register" element= {<Register/> }/>
      <Route path="/createcategory" element= {<Createcategory /> }/>
      <Route path="/Catogerylist" element= {<Catogerylist /> }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
