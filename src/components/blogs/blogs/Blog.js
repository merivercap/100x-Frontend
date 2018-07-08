// React
import React from 'react';

// Apollo / GraphQL
import { Query } from 'react-apollo';
import { fetchBlog } from '../../../graphql/blogs_api';

// HOCs
import Layout from '../../../HOCs/Layout';

// Components
import BlogHeader from '../BlogHeader';
import Comments from '../../comments/Comments';

/**
 * TODO:
 * Create loading component and render that instead of 'Loading text'
 * Extract image urls out of body and display
 */
export default class Blog extends React.Component {
  state = {
    blogId: window.location.pathname.slice(7)
  };

  render() {
    return (
      <Layout>
        <Query 
          query={ fetchBlog }
          variables={ { postId: this.state.blogId } }
          notifyOnNetworkStatusChange
        >
          {
            ({ loading, error, data }) => {
              if (loading) return 'Loading...';
              if (error) {
                console.log('error', error);
                return `Error in landing! ${error.message}`;
              }

              const blog = data.getPost;

              return (
                <article className="blog">
                  <BlogHeader blog={blog} />
                  <content>
                    <h1>
                      { blog.title }
                    </h1>
                    <div className="blog-img">
                      {/* <img src={ blog.image_url } /> */}
                    </div>
                    <p>
                      { blog.body }
                    </p>
                  </content>
                  {/* <Comments blog={blog} /> */}
                </article>
              );
            }
          }
        </Query>
      </Layout>
    );
  }
}
