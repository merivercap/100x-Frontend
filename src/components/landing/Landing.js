// React
import React from 'react';
import { Link } from 'react-router-dom';

// Apollo / GraphQL
import { Query } from 'react-apollo';
import { fetchBlogs } from '../../graphql/blogs_api';

// HOCs
import Layout from '../../HOCs/Layout';

// Components
import BlogPeek from '../blogs/BlogPeek';

class Landing extends React.Component {
  mapBlogs = () => (
    /** TODO: fetch blogs from backend endpoint and map them into HTTML elements */
    this.blogsToRender.map(blog => <BlogPeek blog={blog} />)
  );
  
  render() {
    return (
      <Layout>
          <Query query={ fetchBlogs }>
            {
              ({ loading, error, data }) => {
                if (loading) return 'Loading...';
                if (error) {
                  console.log('error: ', error);
                  return `Error in Landing! ${error.message}`;
                }
                
                return (
                  <section className="landing">
                    <img
                      className="landing-logo"
                      src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1531042766/hundredx-logo_knkvo1.png"
                    />
                    <div className="landing-blogs">
                      {
                        data.getAllPosts.map(blog => (
                          <Link to={ `/blogs/${blog.id}` } key={ blog.id }>
                            <li className='blog-peek-container'>
                              <BlogPeek blog={ blog }/>
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
  }
}

export default Landing;