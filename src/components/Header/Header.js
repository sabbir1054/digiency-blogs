import React from 'react';
import Hero from '../Hero/Hero';
import Navigation from '../Navbar/Navigation';

const Header = () => {
    return (
        <div>
            <Navigation />
            <Hero/>
        </div>
    );
};

export default Header;