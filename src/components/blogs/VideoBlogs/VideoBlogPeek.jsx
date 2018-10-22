import React from 'react';

// Components
import BlogHeader from '../BlogHeader';

/** TODO
 * embed video instead of just dispaying url
 */

const VideoBlogPeek = ({ blog }) => (
  <div className="blog">
    <BlogHeader blog={blog} />
    <div className="content">
      <h1>{blog.title}</h1>
      <a onClick={stopPropagation} href={blog.body} target="_blank">{blog.body}</a>
      
      {/* <embed src={blog.body}/> */}
      {/* <iframe
        // height="420px"
        width="420px"
        src={blog.body}/> */}
    </div>
  </div>
);

export default VideoBlogPeek;


/** Helper functions */

function stopPropagation(event) {
  event.stopPropagation();
}
