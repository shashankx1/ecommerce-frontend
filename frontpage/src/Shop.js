import React, {useEffect, useState} from 'react';
import "./shop.css"
import SearchIcon from "./assets/search.png";
import {chairArray} from './chairData';
import CategoryItem from './CategoryItem';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';



function Shop() {

    const[data, setData]= useState([]);
    const navigate = useNavigate ();


    useEffect(() => {
        axios.get('http://localhost:5000/products').then(res => setData(res.data.data)).catch(err => console.log(err))
    },[])
     

    return (
        <div className='bg-secondary'>

            <div className='d-flex  align-item-center justify-content-center   '>
                <h2>search your dream furniture</h2>

                </div>


            <div className='d-flex  align-item-center justify-content-center m-5 ' >
                <div className='d-flex  align-item-center justify-content-center'>
                <img className='sea' src={SearchIcon} alt="" />
                </div>
            <input class="form-control" id="myInput" type="text" placeholder="Search.. " className='search'/>
                


                </div>
                    <div className='d-flex flex-wrap p-2 m-2 justify-content-center'>
                        {
                            data.map (chair => <CategoryItem name = {chair.name} image={chair.imageUrl}/>)
                        }

                    


             
                

            
                 </div>





































        </div>
    );
    }

    export default Shop ;