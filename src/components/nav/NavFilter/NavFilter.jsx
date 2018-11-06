// React
import React from 'react';
import { Link } from 'react-router-dom';

import { AppConsumer, ScreenType } from '../../shared/ScreenType';

const NavFilter = () => (
  <div className="nav--filter-container">
    <AppConsumer>
      {({ screenType }) => {
        console.log('screenType: ', screenType);
        if (screenType < ScreenType.TABLET) {
          return <NavFilterMobile />;
        } else {
          return <NavFilterDesktop />;
        }
      }}
    </AppConsumer>
  </div>
);

export default NavFilter;


/** Helper Components */

const NavFilterMobile = () => (
  <div>
    Mobile
  </div>
);

const NavFilterDesktop = () => (
  <div>
    <div className="nav--filter">
      <Link to="/" className="nav-filter--item">
        All Blogs
      </Link>
      <Link to="/blogs/feed" className="nav-filter--item">
        Home
      </Link>
      <Link to="/blogs/story" className="nav-filter--item">
        Blog
      </Link>
      <Link to="/blogs/news" className="nav-filter--item">
        News
      </Link>
      <Link to="/blogs/video" className="nav-filter--item">
        Video
      </Link>
    </div>
  </div>
);
