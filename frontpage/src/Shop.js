import React from 'react';
import "./shop.css"
import SearchIcon from "./assets/search.png";
import {chairArray} from './chairData';
import CategoryItem from './CategoryItem';

function Shop() {



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
                    <div className='d-flex flex-wrap p-2 g-2 justify-content-center'>
                        {
                            chairArray.map (chair => <CategoryItem name = {chair.name} image={chair.image}/>)
                        }

                    


             
                

            
                 </div>





































        </div>
    );
    }

    export default Shop ;