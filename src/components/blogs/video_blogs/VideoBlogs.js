// React
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

// Apollo / GraphQL
import { Query } from 'react-apollo';
import { getPostsByType } from '../../../graphql/blogs_api';

// HOCs
import Layout from '../../../HOCs/Layout';

// Components
import VideoBlogPeek from './VideoBlogPeek';
import { GqlError, Loading } from '../../shared';

class VideoBlogs extends React.Component {
  render() {
    return (
      <Layout>
        <Query query={ getPostsByType } variables={{ postType: "NEWS_POST" }}>
          {({ data, error, loading }) => {
            if (loading) return <Loading />
            if (error) return <GqlError error={ error } />
            const videoPosts = data.getPostsByType;
            return (
              <Fragment>
                <section className="blogs">
                  <div className="content">
                    {
                      videoPosts.map(blog => (
                        <Link to={ `/blogs/${blog.id}` } key={ blog.id }>
                          <li className="blog-peek-container">
                            <VideoBlogPeek blog={ blog } />
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

export default VideoBlogs;