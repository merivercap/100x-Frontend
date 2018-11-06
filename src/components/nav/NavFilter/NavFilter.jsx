// React
import React from 'react';
import { Link } from 'react-router-dom';
import { AppConsumer, ScreenType } from '../../shared/ScreenType';

const FeedType = {
  ALL_BLOGS: 'All Blogs',
  BLOG: 'Blog',
  HOME: 'Home',
  NEWS: 'News',
  VIDEO: 'Video',
};

class NavFilter extends React.Component {
  state = {
    feedType: FeedType.ALL_BLOGS,
  };
  
  render() {
    const { feedType } = this.state;
    return (
      <div className="nav--filter-container">
        <AppConsumer>
          {({ screenType }) => {
            console.log('screenType: ', screenType);
            if (screenType < ScreenType.TABLET) {
              return <NavFilterMobile feedType={ feedType } />;
            } else {
              return <NavFilterDesktop />;
            }
          }}
        </AppConsumer>
      </div>
    );
  };

  updateFeedType = updatedFeedType => {
    this.setState({ feedType: updatedFeedType });  
  };
}

export default NavFilter;


/** Helper Components */

class NavFilterMobile extends React.Component {
  state = {
    showFiltersDropdown: false,
  };

  render() {
    const { feedType } = this.props;
    const { showFiltersDropdown } = this.state;
    return (
      <div className="nav--filter-wrapper mobile">
        <button onClick={ this.toggleDropdown }>{ feedType }</button>
        { showFiltersDropdown && (
          <div>
            <div className="bg"></div>
            <NavFilters />
          </div>
        )}
      </div>
    );
  }

  toggleDropdown = () => this.setState({ showFiltersDropdown: !this.state.showFiltersDropdown });
}

const NavFilterDesktop = () => (
  <div className="nav--filter-wrapper desktop">
    <NavFilters />
  </div>
);

const NavFilters = () => (
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
);
