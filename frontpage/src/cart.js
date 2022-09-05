import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function Cart() {
  const [data, setData] = useState([]);

  const [update, setUpdate] = useState(false);

  // const
  const userid = localStorage.getItem("userID");
  useEffect(() => {
    //Increase API ---> call and get status 200
    axios
      .get(`http://localhost:5000/users/cart/${userid}`)
      .then((res) => {
        console.log(res.data.data.items);
        setData(res.data.data.items);
      })
      .catch((err) => console.log(err));
  }, [update]);
 
  
    const increment = (productId) => {
        axios
          .post(`http://localhost:5000/users/cart/${userid}`, {
            productId: productId,
          })
          .then((res) => {
            console.log(res.data);
            setUpdate(!update)
          })
          .catch((e) => console.log(e));
      };
   
      const Remove = (productId) => {
        axios
          .delete(`http://localhost:5000/users/cart/${userid}`, {
            productId: productId,
          })
          .then((res) => {
            console.log(res.data);
            setUpdate(!update)
          })
          .catch((e) => console.log(e));
      };
   
 
  return (
    <div className="Cart">
      <div>
        {data.map((items) => (
          <div>
            <p>{items._id}</p>
            <p>{items.name}</p>
            <p>{items.price}</p>
            <div className="d-flex" >
            <button onClick={() => increment(items.productID)}>Increase</button>
            <p>{items.quantity}</p>
            <button onClick={() =>Remove(items.productID)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Cart;
