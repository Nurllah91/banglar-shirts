import React from 'react';

const Cart = ({cart, removeFromCart}) => {
    return (
        <div>
           <h2>Total Order: {cart.length}</h2>
           {
            cart.map(tShirt => <p 
                key={tShirt._id}
                >
                    {tShirt.name}
                    <button onClick={() => removeFromCart(tShirt._id)}>X</button>
                    </p>)
           }
        </div>
    );
};

export default Cart;