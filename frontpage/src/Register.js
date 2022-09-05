import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {BsFillArchiveFill } from "react-icons/bs";
import './Register.css';

function Register() {
  const navigate = useNavigate();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function registeruser() {
    console.log("emailaddress", emailAddress);
    console.log("password", password);
    console.log("firstname", firstname);
    console.log("lastname", lastname);
    console.log("phoneNumber", phoneNumber);

    axios
      .post("http://localhost:5000/users/register", {
        emailAddress: emailAddress,
        password: password,
        name: firstname,

        phoneNumber: phoneNumber,
      })
      .then((response) => {
        if (response.data.status == 200) {
          alert("register successfully");
          navigate("/");
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="main d-flex justify-content-center align-item-center ">
     
      <div className="d-flex justify-content-center align-item-center my-5">
        <div className="d-flex flex-column justify-content-center align-items-center gap-3 ">
            <h1><b>REGISTER HERE</b></h1>
          
            <input
              onChange={(e) => setFirstname(e.target.value)}
              type="text"
              placeholder="FIRST NAME"
              className="form-control"
            />

            <input
              onChange={(e) => setLastname(e.target.value)}
              type="text"
              placeholder="LAST NAME"
              className="form-control"
            />
         

          
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="PASSWORD"
              className="form-control"
            />
          

          
            <input
              onChange={(e) => setEmailAddress(e.target.value)}
              type="email"
              placeholder="EMAIL"
              className="form-control"
            />
          

          
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="phoneNumber"
              placeholder="PHONE NUMBER"
              className="form-control"
            />
        
          <div>
            <button onClick={registeruser} type="submit" className="btn btn-dark">
              Register User{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
