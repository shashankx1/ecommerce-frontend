import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


function Register() {
    const navigate = useNavigate()

    const [emailAddress, setEmailAddress] = useState("")  
    const [password, setPassword] = useState("")  
    const [name, setName] = useState("")  
    const [phoneNumber, setPhoneNumber] = useState("")  

   function registeruser(){
    console.log('emailaddress',emailAddress)
    console.log('password',password)
    console.log('name',name)
    console.log('phoneNumber', phoneNumber)

    axios.post('http://localhost:5000/users/register', {emailAddress: emailAddress, password: password, name:name, phoneNumber:phoneNumber })
        .then(response => {
            if (response.data.status == 200) {
                alert("register successfully")
                navigate("/")
            }
        })
        .catch(error => console.log(error))
   }  

    return (
        <div className='d-flex'>

            <div>
                <img src="https://thumbs.dreamstime.com/b/registration-hand-pressing-button-interface-blue-background-49410297.jpg" alt="" />

            </div>

            <div className='d-flex justify-content-center'>
                    <div className='d-flex flex-column'>
                    
                    
                    <div className='d-flex gap-3'>
                    <label>NAME</label>
                    <input onChange={e =>setName(e.target.value)} type="text" placeholder='FIRST NAME'/>
                    <label>SURNAME </label>
                    <input type="text" placeholder='LAST NAME'/>
                    
                    </div>
                    
                    <div class= "d-flex gap-3">

                    <label>password</label>
                    <input onChange={e => setPassword(e.target.value)} type="password" placeholder='PASSWORD'/>
                    </div>
                    <div>
                        <label>Ema!l</label>
                        <input onChange={e => setEmailAddress (e.target.value)}type="email" placeholder='email'/>
                    </div>

                    <div>
                        <label>phone Number</label>
                        <input onChange={e=>setPhoneNumber(e.target.value)} type="phoneNumber" placeholder='phoneNumber'/>
                    </div>
                    <button onClick={registeruser}  type='submit'>REEGISTER USER </button>
                    
                
                </div>
        </div>
        </div>
    );
    }

    export default Register;
