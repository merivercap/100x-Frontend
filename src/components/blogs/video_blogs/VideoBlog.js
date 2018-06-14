import React from 'react';

// Components
import BlogHeader from '../BlogHeader';
import Comments from '../../comments/Comments';

/**
 * TODO:
 * Replace static data with actual data
 */

const VideoBlog = videoBlog => (
  <div className="videoBlog">
    <BlogHeader videoBlog={videoBlog} />
    <content>
      <h1>
        Bitcoin and Litecoin Are Rising While Other Cryptocurrencies Are Falling
        {/* { videoBlog.title } */}
      </h1>
      <div className="videoBlog-video">
        {/* <img src={ videoBlog.video_url } /> */}
      </div>
    </content>
    <Comments videoBlog={videoBlog} />
  </div>
);

export default VideoBlog;