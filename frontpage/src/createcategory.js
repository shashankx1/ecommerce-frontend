import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Create() { 
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [imageurl, setImageurl] = useState("")

    function createcategory1(){
        console.log('name',name)
        console.log ('imageurl',imageurl)
       
        axios.post("http://localhost:5000/category",  {name:name, imageurl:imageurl })
        .then(response => {
            if (response.data.status == 200) {
                alert("CREATE CATEGORY successfully")
                navigate("/")
            }
        })
        .catch(error => console.log(error))
   }  
 

    return (
        <div >
            <div>
                <label> </label>
                <input onChange={e =>setName(e.target.value)} type="name" placeholder='name'/><br />
                <input onChange={e =>setImageurl(e.target.value)} type="url" placeholder='Imageurl'/> <br />
                <button onClick={createcategory1}  type='submit'>CREATE </button>
            </div>
        </div>
    )
    }
export default Create