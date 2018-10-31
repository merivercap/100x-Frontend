import React from 'react';

// Utils
import { BLOG_TYPES } from '../../../../utils/blogTypes';

const BlogTypeBar = ({ handleTypeChange }) => (
  <nav className="blog-type-bar--container">
    <div className="blog-type--item" onClick={ handleTypeChange(BLOG_TYPES.story) }>
      Story
    </div>
    <div className="blog-type--item" onClick={ handleTypeChange(BLOG_TYPES.news) }>
      News
    </div>
    <div className="blog-type--item" onClick={ handleTypeChange(BLOG_TYPES.video) }>
      Video
    </div>
  </nav>
);

export default BlogTypeBar;
