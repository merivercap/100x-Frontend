import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

import client from '../utils/apollo';
// import ApolloClient from 'apollo-boost';

/**
 * TODO:
 * Refactor blog routes to be more modular
 * https://stackoverflow.com/questions/44452858/nesting-routes-in-react-router-v4
 * https://reacttraining.com/react-router/web/guides/quick-start
 * https://reacttraining.com/react-router/web/example/route-config
 */

// Components
import Landing from './landing/Landing';
import Login from './login/Login';
import Register from './register/Register';
import Blog from './blogs/blogs/Blog';
import Blogs from './blogs/blogs/Blogs';
import NewsBlog from './blogs/news_blogs/NewsBlog';
import NewsBlogs from './blogs/news_blogs/NewsBlogs';
import VideoBlog from './blogs/video_blogs/VideoBlog';
import VideoBlogs from './blogs/video_blogs/VideoBlogs';

export default class App extends Component {  
  render() {
    return (
      <ApolloProvider client={ client }>
        <Router history={ createBrowserHistory() }>
          <div className="App">
            <Switch>
              <Route exact path="/" component={ Landing } />
              <Route exact path="/login" component={ Login } />
              <Route exact path="/register" component={ Register } />
              <Route exact path="/blogs/:id" component={ Blog } />
              <Route exact path="/blogs" component={ Blogs } />
              <Route exact path="/news_blogs/:id" component={ NewsBlog } />
              <Route exact path="/news_blogs" component={ NewsBlogs } />
              <Route exact path="/video_blogs/:id" component={ VideoBlog } />
              <Route exact path="/video_blogs" component={ VideoBlogs } />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}