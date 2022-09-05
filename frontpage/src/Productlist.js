import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Productlist(){
    const[data,setData] = useState([]);
    const navigate = useNavigate([]);


useEffect(() => {
    axios
    .get("http://localhost:5000/products")
    .then((res)=> setData(res.data.data))
    .catch((err)=> console.log(err));
},[]);

return(
    <div className="productlist">
        <h1>product List</h1>
        <div>
            {data.map((item)=>(
                <div> 
                    <p>{item.id}</p>
                <img src={item.imageurl} alt=""/>
                <p>{item.price}</p>
                </div>
            ))}
        </div>
    </div>
)
}
            
export default Productlist;