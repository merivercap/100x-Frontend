// React
import React from 'react';

// Components
import Logo from './Logo';
import NavFilter from './NavFilter';
import NavMenu from './NavMenu';

const Nav = () => (
  <nav className="nav">
    <div className="content">
      <Logo />
      <NavFilter />
      <NavMenu />
    </div>
  </nav>
);

export default Nav;
