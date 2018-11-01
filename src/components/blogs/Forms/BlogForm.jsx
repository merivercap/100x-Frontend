import React from 'react';

// HOCs
import Layout from '../../../HOCs/Layout';

// Components
import BlogTypeBar from './BlogTypeBar';
import NewsForm from './NewsForm';
import StoryForm from './StoryForm';
import VideoForm from './VideoForm';

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
            <BlogTypeBar blogType={ blogType } handleTypeChange={ this.handleTypeChange } />
            <div className="blog-form--content">
              { blogType === BLOG_TYPES.story && <StoryForm /> }
              { blogType === BLOG_TYPES.news && <NewsForm /> }
              { blogType === BLOG_TYPES.video && <VideoForm /> }
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  handleTypeChange = blogType => event => this.setState({ blogType });
}

export default BlogForm;
