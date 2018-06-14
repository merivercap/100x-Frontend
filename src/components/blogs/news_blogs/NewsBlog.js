import React from 'react';

// Components
import BlogHeader from '../BlogHeader';
import Comments from '../../comments/Comments';

/**
 * TODO:
 * Replace static data with actual data
 */

const NewsBlog = newsBlog => (
  <div className="newsBlog">
    <BlogHeader newsBlog={newsBlog} />
    <content>
      <h1>
        Bitcoin and Litecoin Are Rising While Other Cryptocurrencies Are Falling
        {/* { newsBlog.title } */}
      </h1>
      <div className="newsBlog-img">
        {/* <img src={ newsBlog.news_link } /> */}
      </div>
    </content>
    <Comments newsBlog={newsBlog} />
  </div>
);

export default NewsBlog;