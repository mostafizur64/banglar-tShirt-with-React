import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShit from '../TShirt/TShit';
import Cart from '../Cart/Cart';
import './Home.css'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tShirt) => {
        const exists = cart.find(ts => ts._id === tShirt._id);
        if (exists) {

            toast("Already Exists in Card!");
          

        }
        else {
            const newCart = [...cart, tShirt];
            setCart(newCart);
        }

    }
    const handleRemoveFromCart = (id) => {
        const newTShirt = cart.filter(tShirt => tShirt._id !== id);
        setCart(newTShirt);
    }
    return (
        <div className='home-container'>
            <div className='tShirts-container'>
                {
                    tShirts.map(tShirt =>
                        <TShit
                            key={tShirt._id}
                            tShirt={tShirt}
                            handleAddToCart={handleAddToCart}
                        >

                        </TShit>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}>
               
                </Cart>
            </div>
        </div>
    );
};

export default Home;