import React from "react";
import "./contact.css";
import { RiContactsLine } from "react-icons/bs";
function Contact() {
  return (
    <div className="container">
      <div className="">
        <div className="contact ">
          <div>
            <h1>CONTACT US ME</h1>
            {/* <button type="button2  " class="btn btn-outline-dark ">SHOP NOW</button> */}

            <h3>ADDRESS</h3>
            <p className="Address">
              P-7 SRINIWASPURI <br /> SOUTH-EXTENSION <br /> 110065
            </p>

            <h3>PHONE NO.</h3>
            <p className="Phone">011-876543219</p>

            <h3>EMAIL</h3>
            <a className="gmail" href="">
              SHASHANKKUMARX1@GMAIL.COM
            </a>
          </div>

          <div>
            <div className="d-flex ">
              <div>
                <h3>SEND US A MESSAGE 🚀</h3>
                <br />
                <input
                  type="text"
                  placeholder="FULL NAME"
                  className="form-control"
                />
                <br />
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="form-control"
                />
                <br />
                <input
                  type="text"
                  placeholder="SUBJECT"
                  className="form-control"
                />
                <br />
                <div className="d-flex justify-content-end">
                <button type="button" class="btn btn-outline-info btn-lg">SEND</button>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
