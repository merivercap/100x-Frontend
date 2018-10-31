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
import BlogPeek from '../BlogPeek';
import { GqlError, Loading } from '../../shared';

const NewsBlogs = () => (
  <Layout>
    <Query query={ GET_POSTS_BY_TYPE } variables={{ postType: "VIDEO_POST"}}>
      {({ data, error, loading }) => {
        if (loading) return <Loading />
        if (error) return <GqlError error={ error } />
        const newsPosts = data.GET_POSTS_BY_TYPE;
        return (
          <Fragment>
            <section className="blogs">
              <div className="content">
                {
                  newsPosts.map(blog => (
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

export default NewsBlogs;
