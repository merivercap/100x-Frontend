// React
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// Apollo / GraphQL
import { Query } from 'react-apollo';
import { getPostsByType } from '../../../graphql/blogs_api';

// HOCs
import Layout from '../../../HOCs/Layout';

// Components
import BlogPeek from '../BlogPeek';
import { GqlError, Loading } from '../../shared';

const StoryBlogs = () => (
  <Layout>
    <Query query={ getPostsByType } variables={{ postType: "BLOG_POST" }}>
      {({ data, error, loading }) => {
        if (loading) return <Loading />
        if (error) return <GqlError error={ error } />
        const blogPosts = data.getAllPosts;
        return (
          <Fragment>
            <section className="blogs">
              <div className="content">
                {
                  blogPosts.map(blog => (
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

export default StoryBlogs;