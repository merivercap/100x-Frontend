import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <div className="logo">
    <Link to="/">
      {/* TODO: Get svg file for logo and inject here */}
      <img
        alt="logo"
        src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1541460504/hundredx_nnhbj5.png"
      />
    </Link>
  </div>
);

export default Logo;
