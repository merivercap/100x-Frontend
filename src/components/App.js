// React
import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

// Apollo / GraphQL
import { ApolloProvider } from 'react-apollo';
import client from '../utils/apollo';

// Steem
import steemAuth from '../services/auth';

/**
 * TODO:
 * Refactor blog routes to be more modular
 * https://stackoverflow.com/questions/44452858/nesting-routes-in-react-router-v4
 * https://reacttraining.com/react-router/web/guides/quick-start
 * https://reacttraining.com/react-router/web/example/route-config
 */

// Components
import Account from './users/account';
import Landing from './landing/Landing';
import Login from './login/Login';
import Register from './register/Register';
import Blog from './blogs/Blog';
import BlogForm from './blogs/BlogForm';
import Blogs from './blogs/blogs/Blogs';
import FeedBlogs from './blogs/feed_blogs/FeedBlogs';
import StoryBlogs from './blogs/story_blogs/StoryBlogs';
import NewsBlogs from './blogs/news_blogs/NewsBlogs';
import VideoBlogs from './blogs/video_blogs/VideoBlogs';
import Wallet from './users/Wallet';

const App = () => {
  const authResponse = window.location.search;
  if (authResponse) steemAuth.login(authResponse);
  return (
    <ApolloProvider client={ client }>
      <Router history={ createBrowserHistory() }>
        <div className="App">
          <Switch>
            <Route exact path="/" component={ Landing } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/register" component={ Register } />
            <Route exact path="/account" component={ Account } />
            <Route path="/blogs" component={ Blogs } />
            <Route exact path="/blogs/new" component={ BlogForm } />
            <Route exact path="/blogs/edit/:id" component={ BlogForm } />
            <Route exact path="/blogs/feed" component={ FeedBlogs } />
            <Route exact path="/blogs/news" component={ NewsBlogs } />
            <Route exact path="/blogs/story" component={ StoryBlogs } />
            <Route exact path="/blogs/video" component={ VideoBlogs } />
            <Route exact path="/blogs/:id" component={ Blog } />
            <Route exact patht="/account/wallet" component={ Wallet } />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
