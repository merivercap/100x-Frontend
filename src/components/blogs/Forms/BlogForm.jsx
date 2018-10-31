import React from 'react';

// HOCs
import Layout from '../../../HOCs/Layout';

// Components
import BlogTypeBar from './BlogTypeBar';
// import NewsForm from './NewsForm';
import StoryForm from './StoryForm';
// import VideoForm from './VideoForm';

// Utils
import { BLOG_TYPES } from '../../../utils/blogTypes';

class BlogForm extends React.Component {
  state = {
    blogType: BLOG_TYPES.story,
  };
  
  render() {
    const { blogType } = this.state;
    return (
      <Layout>
        <div className="blog-form--container">
          <div className="blog-form--wrapper">
            <BlogTypeBar handleTypeChange={ this.handleTypeChange } />
            <div className="blog-form--content">
              <StoryForm type={ blogType } />
              {/* <NewsForm type={ blogType } />
              <VideoForm type={ blogType } /> */}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  handleTypeChange = blogType => {
    const self = this;
    return event => {
      console.log('blogType: ', blogType);
      self.setState({ blogType });
    }
  }
}

export default BlogForm;
