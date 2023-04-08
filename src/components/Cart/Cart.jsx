import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please added some Products</p>

    }
    else {
        message =
            <div>
                <h3>BoroLLOxx</h3>,
                <p><small>Thanks for giving your money</small></p>
            </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ?'blue':'orange'}>Order Summary : {cart.length}</h2>
            <p className={`bold bordered ${cart.length===3 ? 'yellow':'purple'}`}>Mostafizur Rahman</p>
            {message}
            {cart.length > 2 ? <span>Shopping More...</span> : <span>Your are Not Perfect this Shopping</span>}
            {
                cart.map(tShirt =>
                    <p key={tShirt._id}>
                        {tShirt.name}
                        <button onClick={() => handleRemoveFromCart(tShirt._id)}>X</button>
                    </p>)
            }
            {cart.length === 2 && <span>You can more Shopping ......</span>}
            {cart.length ===3 || <h2>Tinta ta HOilo nah re!!!</h2>}
        </div>
    );
};

export default Cart;
//conditional rendering
/**
 * use if else to set a variable that will contain an element,components
 * ternary operator ? 'for true: 'false
 * logical && (if the condition is true then the next thing will be displayed)
 * logical || (if the condition is false then the next thing will be displayed
 */

/***
 * conditional CSS class
 * 1.use ternary
 * 2.ternary inside template string
 */