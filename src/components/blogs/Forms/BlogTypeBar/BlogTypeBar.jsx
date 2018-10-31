import React from 'react';

// Utils
import { BLOG_TYPES } from '../../../../utils/blogTypes';

const BlogTypeBar = ({ blogType, handleTypeChange }) => (
  <nav className="blog-type-bar--container">
    <div className="blog-type--item" onClick={ handleTypeChange(BLOG_TYPES.story) }>
      <span>Story</span>
      { blogType === BLOG_TYPES.story && <div className="active-bar"></div> }
    </div>
    <div className="blog-type--item" onClick={ handleTypeChange(BLOG_TYPES.news) }>
      <span>News</span>
      { blogType === BLOG_TYPES.news && <div className="active-bar"></div> }
    </div>
    <div className="blog-type--item" onClick={ handleTypeChange(BLOG_TYPES.video) }>
      <span>Video</span>
      { blogType === BLOG_TYPES.video && <div className="active-bar"></div> }
    </div>
  </nav>
);

export default BlogTypeBar;
