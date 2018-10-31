import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';

import { GET_ALL_POSTS } from '../../graphql/blogs_api';

// Components
import Layout from '../../HOCs/Layout';
import { GqlError, Loading } from '../shared';

import BlogFilter from './BlogFilter';
import BlogPeek from './BlogPeek';

const Blogs = () => (
  <Layout>
    <Query query={ GET_ALL_POSTS }>
      {({ data, error, loading }) => {
        if (loading) return <Loading />
        if (error) return <GqlError error={ error } />
        const blogs = data.getAllPosts;
        return (
          <section className="blogs">
            <BlogFilter />
            <div className="content">
              {
                blogs.map(blog => (
                  <Link to={`/blogs/${blog.id}`} key={blog.id}>
                    <li className="blog-peek-container">
                      <BlogPeek blog={blog} />
                    </li>
                  </Link>
                ))
              }
            </div>
          </section>
        );
      }}
    </Query>
  </Layout>
);

export default Blogs;
