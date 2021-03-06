// React
import React from 'react';

// Apollo / GraphQL
import { Query } from 'react-apollo';
import { FETCH_BLOG } from '../../graphql/blogs_api';

// HOCs
import Layout from '../../HOCs/Layout';

// Components
import BlogHeader from './BlogHeader';
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
          query={ FETCH_BLOG }
          variables={ { postId: this.state.blogId } }
          notifyOnNetworkStatusChange>
          {
            ({ loading, error, data }) => {
              if (loading) return <Loading />
              if (error) return <GqlError error={ error } />;
              const blog = data.getPost;
              const bodyHtml = htmlParser.getHtml({ body: blog.body }).props.dangerouslySetInnerHTML;
              return (
                <article className="blog blog-view">
                  <BlogHeader blog={blog} />
                  <div className="blog--content">
                    <h1>{ blog.title }</h1>
                    <p dangerouslySetInnerHTML={ bodyHtml } />
                  </div>
                  <Replies post={ blog } />
                </article>
              );
            }
          }
        </Query>
      </Layout>
    );
  }
}
