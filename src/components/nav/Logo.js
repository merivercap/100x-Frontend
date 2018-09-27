import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <div className="logo">
    <Link to="/">
      {/* TODO: Get svg file for logo and inject here */}
      <img
        alt="logo"
        src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1531042766/hundredx-logo_knkvo1.png"
      />
    </Link>
  </div>
);

export default Logo;
