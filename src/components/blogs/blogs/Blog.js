import React from 'react';

// Components
import BlogHeader from '../BlogHeader';
import Comments from '../../comments/Comments';

/**
 * TODO:
 * Replace static data with actual data
 */

const Blog = blog => (
  <div className="blog">
    <BlogHeader blog={ blog } />
    <content>
      <h1>
        Bitcoin and Litecoin Are Rising While Other Cryptocurrencies Are Falling
        {/* { blog.title } */}
      </h1>
      <div className="blog-img">
        {/* <img src={ blog.image_url } /> */}
      </div>
      <p>
        Bitcoin and Litecoin are both up, but Ethereum, Ripple and Bitcoin Cash are all in red. The leading digital currency has increased more th...-
        {/* { blog.body } */}
      </p>
    </content>
    <Comments blog={ blog } />
  </div>
);

export default Blog;