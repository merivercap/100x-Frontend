import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import { Query } from 'react-apollo';

import { fetchBlogs } from '../../graphql/blogs_api';

// Components
import Layout from '../../HOCs/Layout';
import { GqlError, Loading } from '../shared';

import Blog from './Blog';
import BlogFilter from './BlogFilter';
import BlogForm from './BlogForm';
import BlogPeek from './BlogPeek';
import FeedBlogs from './FeedBlogs';
import NewsBlogs from './NewsBlogs';
import StoryBlogs from './StoryBlogs';
import VideoBlogs from './VideoBlogs';


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
                  <Route exact path="/blogs/:id" component={ Blog } />
                  <Route exact path="/blogs/edit/:id" component={ BlogForm } />
                  <Route exact path="/blogs/feed" component={ FeedBlogs } />
                  <Route exact path="/blogs/new" component={ BlogForm } />
                  <Route exact path="/blogs/news" component={ NewsBlogs } />
                  <Route exact path="/blogs/story" component={StoryBlogs} />
                  <Route exact path="/blogs/video" component={VideoBlogs} />
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
