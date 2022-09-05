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
import Cart from './cart';

import{BrowserRouter, Routes, Route} from "react-router-dom";
import {Link} from 'react-router-dom'
import { BsFillAlarmFill} from "react-icons/bs";
import { RiContactsLine} from "react-icons/ri";
import { TbHome} from "react-icons/tb";


function App() {
  let isLoggedIn = localStorage.getItem('isLoggedIn');
  console.log(isLoggedIn ,'is logged in');
  const logout =() =>{
    window.localStorage.removeItem('isLoggedIn');
    window.location.reload();
  }

  return (
    <BrowserRouter>
      
        <div className='fullnavbar container   '>
    <div>
      <h1>Furniture Store</h1>
    </div>
    <div className='navbar'>
      <Link className='L1' to="/"> HOME<span><TbHome/></span> </Link>
      <Link className='L2' to="/shop"> SHOP</Link>
      <Link className='L2' to="/login"> LOGIN</Link>
      <Link className='L3' to="/aboutus" >ABOUT</Link>
      <Link className='L4' to="/contact">CONTACT US<span><RiContactsLine/></span></Link>
      <Link className='L5' to="/Register">REGISTER <span><BsFillAlarmFill/></span></Link>
      {/* <button onClick={logout}>Logout</button> */}
      {localStorage.getItem("isLoggedIn") && <button type="button" class="btn btn-outline-dark" onClick={logout}>LOGOUT</button>}

    </div>
  
    </div> 
    <Routes>
      <Route path="/" element= {<Home />}/>
      <Route path="/aboutus" element= {<Aboutus />}/> 
      <Route path="/contact" element= {<Contact />}/>
      <Route path="/shop" element= {  isLoggedIn?  <Shop />: <Login/>}/>
      <Route path="/product/:id" element= {<Product/> }/>
      <Route path="/login" element= {<Login/> }/>
      <Route path="/Register" element= {<Register/> }/>
      <Route path="/createcategory" element= {<Createcategory /> }/>
      <Route path="/Catogerylist" element= {<Catogerylist /> }/>
      <Route path="/cart" element= {<Cart /> }/>
    </Routes>
    </BrowserRouter>
  );
}


export default App;
