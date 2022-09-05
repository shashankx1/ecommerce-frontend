import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  function loginuser() {
    axios
      .post("http://localhost:5000/users/login", {
        emailAddress: emailAddress,
        password: password,
      })
      .then((response) => {
        if (response.data.status == 200) {
          localStorage.setItem("userID",response.data.data._id)
          localStorage.setItem("isLoggedIn", "true");
          navigate("/");
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="main d-flex justify-content-center align-item-center ">
     
      <div className="d-flex justify-content-center align-item-center  my-5">
        <div className="d-flex flex-column justify-content-center align-items-center gap-3 ">
          
          
          <h1><b>LOGIN HERE</b></h1>
          
          <input
            onChange={(e) => setEmailAddress(e.target.value)}
            type="text"
            placeholder="Email"
            className="form-control"
          />
          <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="PASSWORD"
              className="form-control"
            />
            <div className="">
          <button onClick={loginuser} type="submit">
            LOGIN{" "}
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
