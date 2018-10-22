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
import Blogs from './blogs/Blogs';

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
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
