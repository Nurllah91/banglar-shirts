import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import swal from 'sweetalert';


const Home = () => {
    const tShirts = useLoaderData();

    const [cart, setCart] = useState([])

    const handleAddToCart = tShirt => {
        const exist = cart.find(ts => ts._id === tShirt._id);

        if (exist) {
            swal({
                title: "Sorry!",
                text: "You have already added this t-shirt!",
                icon: "warning",
                button: "Ok",
            });
        }
        else {
            const newCart = [...cart, tShirt]
            setCart(newCart);
            swal({
                title: "Good job!",
                text: "You have successfully added this t-shirt!",
                icon: "success",
                button: "Ok",
              });

        }
    }

    const removeFromCart = id => {
        const remaining = cart.filter(ts => ts._id != id);
        setCart(remaining);

        swal({
            title: "Deleted!",
            text: "You have Deleted this t-shirt!",
            icon: "warning",
            button: "Ok",
          });
    }

    return (
        <div className='home-container'>
            <div className="tShirt-container">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>

            <div className="Cart-container">
                <Cart
                    cart={cart}
                    removeFromCart={removeFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;