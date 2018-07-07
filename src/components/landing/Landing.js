// React
import React from 'react';
import { Link } from 'react-router-dom';

// Apollo / GraphQL
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

// HOCs
import Layout from '../../HOCs/Layout';

// Components
import BlogPeek from '../blogs/BlogPeek';

// Utils
import { fetchBlogs } from '../../graphql/blogs_api';
import client from '../../utils/apollo';
import Blog from '../blogs/blogs/Blog';

class Landing extends React.Component {
  mapBlogs = () => (
    /** TODO: fetch blogs from backend endpoint and map them into HTTML elements */
    this.blogsToRender.map(blog => <BlogPeek blog={blog} />)
  );
  
  render() {
    return (
      <Layout>
        <section className="landing">
          <Query query={fetchBlogs()}>
            {({ loading, error, data }) => {
              if (loading) return 'Loading...';
              if (error) {
                console.log('error: ', error);
                return `Error in Landing! ${error.message}`;
              }
              
              return (
                <div name="landing-blogs">
                  {data.getAllPosts.map(blog => (
                    <li className='blog-container' key={blog.id}>
                      <Link to={`/blogs/${blog.id}`}>
                        <BlogPeek blog={ blog }/>
                      </Link>
                    </li>
                  ))}
                </div>
              );
            }}
          </Query>
        </section>
      </Layout>
    );
  }
}

export default Landing;

{/* <div key={blog.id}>
  title: {blog.title}
  body: {blog.body}
  author: {blog.author}
</div> */}