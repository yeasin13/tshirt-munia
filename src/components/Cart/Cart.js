import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    //Conditional rendering option
    //1. Element Variable
    let command
    if(cart.length === 0){
        command = <p>Please Add at least one Items</p>
    }
    else if(cart.length === 1){
        command = <div>
            <h5></h5>
        </div>
    }
    else{
        command = <p><small>Thanks for adding item</small></p>
    }
    return (
        <div>
            <h2>Item Selected: {cart.length}</h2>
            {command}
           {
               cart.map(tShirt=><p>
                   {tShirt.name}
                   <button onClick={() => handleRemoveFromCart(tShirt)} >X</button>
                   </p>)
           }
        </div>
    );
};

export default Cart;