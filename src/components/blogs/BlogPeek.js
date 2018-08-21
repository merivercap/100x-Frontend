import React from 'react';

// Components
import BlogHeader from './BlogHeader';

// Utils
import htmlParser from '../../utils/htmlParser';

class BlogPeek extends React.Component {
  constructor(props) {
    super(props);
  }

  parseBody = () => {
    const body = this.props.blog.body;
    const bodyHtml = htmlParser.getHtml({ body }).props.dangerouslySetInnerHTML;
    return bodyHtml;
  }
  
  render() {
    const blog = this.props.blog;
    const bodyHtml = this.parseBody();
    
    return (
      <div className="blog">
        <BlogHeader blog={blog} />
        <content>
          <h1>
            {blog.title}
          </h1>
          <div className="blog-img">
            {/* <img src={ blog.image_url } /> */}
          </div>
          <p dangerouslySetInnerHTML={ bodyHtml } />
        </content>
      </div>
    );
  }
}

export default BlogPeek;
