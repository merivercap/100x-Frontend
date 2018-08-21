import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NavMenuDropdown = ({ isDropdownShown, isLoggedIn }) => {
  const showDropdownClass = isDropdownShown ? 'show' : '';
  console.log('isLoggedIn: ', isLoggedIn);
  return (
    <div className={`nav-menu-dropdown-container ${showDropdownClass}`}>
      <div className="nav-menu-dropdown">
        {
          isLoggedIn ? (
            <Fragment>
              <Link to="/blogs/new" className="nav-menu-dropdown--item">Write a Story</Link>
              <Link to="/users/account" className="nav-menu-dropdown--item">Account</Link>
              <button className="nav-menu-dropdown--item">Logout</button>
            </Fragment>
          ) : (
            <Fragment>
              <Link to="/login" className="nav-menu-dropdown--item">Login</Link>
              <a className="nav-menu-dropdown--item"
                href="https://signup.steemit.com/"
                target="_blank">
                Register
              </a>
            </Fragment>
          )
        }
      </div>
    </div>
  );
}

export default NavMenuDropdown;
