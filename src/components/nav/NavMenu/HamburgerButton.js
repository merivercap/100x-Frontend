import React from 'react';

const HamburgerButton = ({ handleClick }) => (
  <button onClick={ handleClick } className="hamburger-button">
    <div></div>
    <div></div>
    <div></div>
  </button>
);

export default HamburgerButton;
