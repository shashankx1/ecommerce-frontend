import React from 'react';
import { useNavigate } from 'react-router-dom';
function CategoryItem (props){
    const navigate = useNavigate();
    return (
        <div className='text-center' style={{ maxWidth:300}} onClick = {()=> navigate('/itempages')}>
            <img src={props.image} width="300px"/>
            <p className='d-flex'>{props.name}</p>
        </div>
    )
}

export default CategoryItem