// React
import React from 'react';
import { Link } from 'react-router-dom';

// Apollo / GraphQL
import { Query } from 'react-apollo';
import { GET_ALL_POSTS } from '../../graphql/blogs_api';

// HOCs
import Layout from '../../HOCs/Layout';

// Components
import BlogPeek from '../blogs/BlogPeek';
import BlogFilter from '../blogs/BlogFilter';
import { GqlError, Loading } from '../shared';

const Landing = () => {
  return (
    <Layout>
      <Query query={GET_ALL_POSTS}>
        {
          ({ loading, error, data }) => {
            if (loading) return <Loading />
            if (error) return <GqlError error={error} />
            return (
              <section className="landing">
                <BlogFilter />
                <div className="landing-blogs">
                  {
                    data.getAllPosts.map(blog => (
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
          }
        }
      </Query>
    </Layout>
  );
};

export default Landing;
