// React
import React from 'react';

// Components
import NavBlogFilter from './NavBlogFilter';

export default class NavFilter extends React.Component {
  render() {
    return (
      <div className="nav--filter-container">
        <NavBlogFilter />
      </div>
    );
  }
}
