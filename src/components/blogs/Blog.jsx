// React
import React from 'react';

// Apollo / GraphQL
import { Query } from 'react-apollo';
import { fetchBlog } from '../../graphql/blogs_api';

// HOCs
import Layout from '../../HOCs/Layout';

// Components
import BlogHeader from './BlogHeader';
// import Comments from '../comments/Comments';
import Replies from '../replies';
import { GqlError, Loading } from '../shared';

// Utils
import htmlParser from '../../utils/htmlParser';

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
          notifyOnNetworkStatusChange>
          {
            ({ loading, error, data }) => {
              if (loading) return <Loading />
              if (error) return <GqlError error={ error } />;
              const blog = data.getPost;
              const bodyHtml = htmlParser.getHtml({ body: blog.body }).props.dangerouslySetInnerHTML;
              return (
                <article className="blog">
                  <BlogHeader blog={blog} />
                  <div className="content">
                    <h1>{ blog.title }</h1>
                    <p dangerouslySetInnerHTML={ bodyHtml } />
                  </div>
                  {/* <Comments blog={blog} /> */}
                  <Replies postId={ blog.id } />
                </article>
              );
            }
          }
        </Query>
      </Layout>
    );
  }
}
