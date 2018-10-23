import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Blog from './Blog';
import Blogs from './Blogs';
import BlogForm from './BlogForm';
import FeedBlogs from './FeedBlogs';
import NewsBlogs from './NewsBlogs';
import StoryBlogs from './StoryBlogs';
import VideoBlogs from './VideoBlogs';

/** TODO: Add AuthenticatedRoute component */

const BlogRoutes = () => (
  <Switch>
    <Route exact path="/" component= { Blogs } />
    <Route exact path="/blogs/feed" component={ FeedBlogs } />
    <Route exact path="/blogs/new" component={ BlogForm } />
    <Route exact path="/blogs/news" component={ NewsBlogs } />
    <Route exact path="/blogs/story" component={StoryBlogs} />
    <Route exact path="/blogs/video" component={VideoBlogs} />
    <Route exact path="/blogs/:id" component={ Blog } />
    <Route exact path="/blogs/edit/:id" component={ BlogForm } />
  </Switch>
);

export default BlogRoutes;
