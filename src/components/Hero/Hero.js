import React from 'react';
import'./Hero.css'
const Hero = () => {
    return (
      <div className="py-5 bg-light" id="hero">
        <div className="container">
          <h1 className="display-5 text-center fw-bold">
            35 Stellar <span className="color-text">Graphic Design Blogs</span> to Keep You Educated
            and Inspired
          </h1>
          <p className="text-center fw-normal fs-5 pb-5">
            Home - Blog Page - Graphic Design
          </p>
        </div>
      </div>
    );
};

export default Hero;