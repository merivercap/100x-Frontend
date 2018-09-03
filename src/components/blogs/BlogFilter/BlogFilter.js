// React
import React from 'react';

// Components
import TagFilter from './TagFilter';
import TrendingFilter from './TrendingFilter';

const BlogFilter = () => (
  <div className="blog-filter">
    <TrendingFilter />
    <TagFilter />
  </div>
);

export default BlogFilter;
