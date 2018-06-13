import React from 'react';

const Nav = () => (
  <nav className="nav">
    <content>
      <div className="logo">
        {/* TODO: Get svg file for logo and inject here */}
      </div>
      <div className="user-session">
        <button>Sign Up</button>
        <button>Log in</button>
      </div>
    </content>
  </nav>
);

export default Nav;