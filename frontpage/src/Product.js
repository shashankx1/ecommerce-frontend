import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Product() {
  const { id } = useParams();
  const userid = localStorage.getItem("userID");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        console.log(res.data.data, "data from backend");
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const addToCart = () => {
    axios
      .post(`http://localhost:5000/users/cart/${userid}`, {
        productId: id,
      })
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  };

  return (
    <div className="Product d-flex ">
      <div>
        <img
          src="https://thumbs.dreamstime.com/b/wooden-chair-isolated-11718982.jpg"
          alt=""
        />
      </div>

      <div className="d-flex flex-column p-5">
        <h1 className="bg-warning">THIS IS MY !S PRODUCT</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..{" "}
          </p>
          <p>{id}</p>
        </div>

        <button onClick={() => addToCart()}> ADD TO CART</button>
      </div>
      <div></div>
    </div>
  );
}

export default Product;
