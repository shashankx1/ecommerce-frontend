import axios from 'axios';
import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()

   function loginuser(){
    axios.post('http://localhost:5000/users/login', {emailAddress: "shashankx1@gmail.com", password: "Shashank@123" })
        .then(response => {
            if (response.data.status == 200) {
                navigate("/")
            }
        })
        .catch(error => console.log(error))
   }  

    return (
        <div className='d-flex'>

            <div>
                <img src="https://www.birthdaywishes.expert/wp-content/uploads/2015/01/welcome-message-1.jpg" alt="" />

            </div>

            <div className='d-flex justify-content-center'>
                    <div className='d-flex flex-column'>
            
                
                    <input type="text" placeholder='FULL NAME'/>
                    <input type="password" placeholder='PASSWORD'/>
                    <button onClick={loginuser} type='submit'>LOGIN </button>
                
                </div>
        </div>
        </div>
    );
    }

    export default Login;
