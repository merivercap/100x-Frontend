// React
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="nav">
    <content>
      <div className="logo">
        <Link to="/">
          {/* TODO: Get svg file for logo and inject here */}
          <img
            src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1531042766/hundredx-logo_knkvo1.png"
          />
        </Link>
      </div>
      {/* <div className="user-session">
        <button>Sign Up</button>
        <button>Log in</button>
      </div> */}
    </content>
  </nav>
);

export default Nav;