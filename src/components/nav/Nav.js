// React
import React from 'react';

// Components
import Logo from './Logo';
import NavFilter from './NavFilter';
import NavMenu from './NavMenu';

class Nav extends React.Component {
  // TODO: connect with steem user state
  state = {
    isLoggedIn: true,
  };

  render() {
    return (
      <nav className="nav">
        <content>
          <Logo />
          <NavFilter />
          <NavMenu isLoggedIn={ this.state.isLoggedIn } />
        </content>
      </nav>
    );
  }
}

export default Nav;