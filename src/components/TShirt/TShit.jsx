import React from 'react';
import './TShirt.css'
const TShit = ({tShirt,handleAddToCart}) => {
    const {_id,name,picture,price} =tShirt;
    console.log(tShirt);
    return (
        <div className='t-shirts'>
           <img src={picture} alt="" />
           <h4>{name}</h4>
           <p>Price: ${price}</p>
           <button onClick={()=>handleAddToCart(tShirt)}>Buy Now</button>
        </div>
    );
};

export default TShit;