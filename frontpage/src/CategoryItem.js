import React from 'react';
import { useNavigate } from 'react-router-dom';
function CategoryItem (props){
    const navigate = useNavigate();
    return (
        <div className='me-4 text-center' style={{ maxWidth:300}} onClick = {()=> navigate(`/product/${props.id}`)}>
            <img style={{height: 300, width: 300}} src={props.image} width="300px"/>
            <p className='d-flex'>{props.name}</p>
        </div>
    )
}

export default CategoryItem