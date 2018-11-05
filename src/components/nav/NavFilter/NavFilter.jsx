// React
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import NavBlogFilter from './NavBlogFilter';

export default class NavFilter extends React.Component {
  render() {
    return (
      <div className="nav--filter-container">
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
  }
}
