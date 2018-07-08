import React from 'react';

// Components
import BlogHeader from './BlogHeader';

/**
 * TODO:
 * Replace static data with actual data
 */

const BlogPeek = ({ blog }) => (
  <div className="blog">
    <BlogHeader blog={blog} />
    <content>
      <h1>
        { blog.title }
      </h1>
      <div className="blog-img">
        {/* <img src={ blog.image_url } /> */}
      </div>
      <p>
        { blog.body.slice(0, 133) }...
      </p>
    </content>
  </div>
);

export default BlogPeek;
