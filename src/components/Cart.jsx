import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const {cart}= useLoaderData();
    console.log(cart);
    return (
        <div>
            cart
        </div>
    );
};

export default Cart;