import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Categoryitem from "./CategoryItem";

function Catogerylist() {
  const [data, setData] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/category")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-secondary">
      <div className="d-flex  align-item-center justify-content-center   ">
        <h2>Category List</h2>
      </div>
      <div className="d-flex  align-item-center justify-content-center m-5 ">
        <div className="d-flex  align-item-center justify-content-center"></div>
      </div>
      <div className="d-flex flex-wrap p-2 m-2 justify-content-center">
        
        {data.map((item) => (
          <Categoryitem name={item.name} image={item.imageUrl} />
        ))}
      </div>
    </div>
  );
}

export default Catogerylist;
