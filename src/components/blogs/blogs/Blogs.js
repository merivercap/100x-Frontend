import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import { Query } from 'react-apollo';

import { fetchBlogs } from '../../../graphql/blogs_api';

// Components
import GqlError from '../../shared/GqlError';
import Layout from '../../../HOCs/Layout';
import Loading from '../../shared/Loading';

import BlogFilter from '../BlogFilter';
import BlogForm from '../BlogForm';
import BlogPeek from '../BlogPeek';


class Blogs extends React.Component {  
  render() {
    return (
      <Layout>
        <Query query={ fetchBlogs }>
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
                <Switch>
                  <Route exact path="/blogs/new" component={ BlogForm } />
                </Switch>
              </section>
            );
          }}
        </Query>
      </Layout>
    );
  }
}

export default Blogs;
