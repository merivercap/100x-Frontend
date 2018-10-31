// React
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

// Apollo / GraphQL
import { Query } from 'react-apollo';
import { GET_POSTS_BY_TYPE } from '../../../graphql/blogs_api';

// HOCs
import Layout from '../../../HOCs/Layout';

// Components
import VideoBlogPeek from './VideoBlogPeek';
import { GqlError, Loading } from '../../shared';

const VideoBlogs = () => (
  <Layout>
    <Query query={ GET_POSTS_BY_TYPE } variables={{ postType: "NEWS_POST" }}>
      {({ data, error, loading }) => {
        if (loading) return <Loading />
        if (error) return <GqlError error={ error } />
        const videoPosts = data.GET_POSTS_BY_TYPE;
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

export default VideoBlogs;
