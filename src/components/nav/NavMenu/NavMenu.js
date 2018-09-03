// React
import React from 'react';

// Components
import HamburgerButton from './HamburgerButton';
import NavMenuDropdown from './NavMenuDropdown';

class NavMenu extends React.Component {
  state = {
    isDropdownShown: false,
  };

  toggleDropdown = () => {
    this.setState({ isDropdownShown: !this.state.isDropdownShown });
  }

  render() {
    return (
      <div className="nav--menu-container">
        <HamburgerButton handleClick={ this.toggleDropdown } />
        <NavMenuDropdown
          isLoggedIn={ this.props.isLoggedIn }
          isDropdownShown={ this.state.isDropdownShown } />
      </div> 
    );
  }
}

export default NavMenu;