import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/orders">Orders</Link>
            <Link to="home">Home</Link>
            <Link to="home">Home</Link>


        </nav>
    );
};

export default Header;