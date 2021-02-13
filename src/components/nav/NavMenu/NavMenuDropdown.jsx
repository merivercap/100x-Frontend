import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import steemConnect from '../../../services/steemConnect';
import steemAuth from '../../../services/auth';

class NavMenuDropdown extends React.Component {
  state = {
    isLoggedIn: false,
  };

  componentDidMount() {
    if (steemAuth.isLoggedIn()) this.setState({ isLoggedIn: true });
  }

  handleLogout = () => {
    steemAuth.logout();
    this.setState({ isLoggedIn: false });
  };
  
  render() {
    const showDropdownClass = this.props.isDropdownShown ? 'show' : '';
    return (
      <div className={`nav-menu-dropdown-container ${showDropdownClass}`}>
        <div className="nav-menu-dropdown">
          {
            this.state.isLoggedIn ? (
              <Fragment>
                <Link to="/blogs/new" className="nav-menu-dropdown--item">Write a Story</Link>
                <Link to="/account" className="nav-menu-dropdown--item">Account</Link>
                <button onClick={this.handleLogout} className="nav-menu-dropdown--item">Logout</button>
              </Fragment>
            ) : (
              <Fragment>
                <a className="nav-menu-dropdown--item" href={steemConnect.getLoginURL()} target="_blank">
                  Login
                </a>
                <a className="nav-menu-dropdown--item"
                  href="https://signup.steemit.com/"
                  rel="noopener noreferrer"
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
}

export default NavMenuDropdown;
