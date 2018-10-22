// React
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// Apollo / GraphQL
import { Query } from 'react-apollo';
import { fetchBlogs } from '../../../graphql/blogs_api';
// import { FeedBlogs } from '../../../graphql/feed_blogs_api';

// HOCs
import Layout from '../../../HOCs/Layout';

// Components
import BlogPeek from '../BlogPeek';
import { GqlError, Loading } from '../../shared';

class FeedBlogs extends React.Component {
  render() {
    return (
      <Layout>
        <Query query={ fetchBlogs }>
          {({ data, error, loading }) => {
            if (loading) return <Loading />
            if (error) return <GqlError error={ error } />
            return (
              <Fragment>
                <section className="blogs">
                  <div className="content">
                    {
                      data.getAllPosts.map(blog => (
                        <Link to={ `/blogs/${blog.id}` } key={ blog.id }>
                          <li className="blog-peek-container">
                            <BlogPeek blog={ blog } />
                          </li>
                        </Link>
                      ))
                    }
                  </div>
                </section>
              </Fragment>
            );
          }}
        </Query>
      </Layout>
    );
  }
}

export default FeedBlogs;
