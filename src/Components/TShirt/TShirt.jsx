import React from 'react';
import './TShirt.css';
const TShirt = ({tShirt, handleAddToCart}) => {
    const {_id, picture, name, price} = tShirt;
    return (
        <div className='tShirt'>
            <div className="tShirt-image">
            <img src={picture} alt="image" />
            </div>
            <div>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <button onClick={() =>handleAddToCart(tShirt)}>Buy Now</button>
            </div>
        </div>
    );
};

export default TShirt;