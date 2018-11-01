import React from 'react';

// Components
import BlogHeader from './BlogHeader';

// Utils
import htmlParser from '../../utils/htmlParser';

const BlogPeek = ({ blog }) => (
  <div className="blog">
    <BlogHeader blog={ blog } />
    <div className="blog--content">
      <h1>{ blog.title }</h1>
      <p dangerouslySetInnerHTML={ parseBody(blog.body) } />
      <div className="blog-peek--gradient">Read more...</div>
    </div>
  </div>
);

export default BlogPeek;


/** Helper functions */

function parseBody(body) {
  const bodyHtml = htmlParser.getHtml({ body }).props.dangerouslySetInnerHTML;
  return bodyHtml;
}
