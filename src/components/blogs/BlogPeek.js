import React from 'react';

// Components
import BlogHeader from './BlogHeader';

// Utils
import htmlParser from '../../utils/htmlParser';

const BlogPeek = ({ blog }) => (
  <div className="blog">
    <BlogHeader blog={blog} />
    <div className="content">
      <h1>
        {blog.title}
      </h1>
      <div className="blog-img">
        {/* <img src={ blog.image_url } /> */}
      </div>
      <p dangerouslySetInnerHTML={ parseBody(blog.body) } />
    </div>
  </div>
);

export default BlogPeek;

/** Helper functions */

function parseBody(body) {
  const bodyHtml = htmlParser.getHtml({ body }).props.dangerouslySetInnerHTML;
  return bodyHtml;
}
