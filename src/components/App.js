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
import { AppProvider, getScreenType } from './shared/ScreenType';
import Account from './users/account';
import Landing from './landing/Landing';
import Login from './login/Login';
import Register from './register/Register';
import BlogRoutes from './blogs/BlogRoutes';

class App extends React.Component {
  state = {
    screenType: getScreenType(),
  };

  componentDidMount() {
    window.addEventListener('resize', this.refreshScreenType);
    const authResponse = window.location.search;
    if (authResponse) steemAuth.login(authResponse);
  }

  componentWIllUnmount() {
    window.removeEventListener('resize', this.refreshScreenType);
  }

  render() {
    return (
      <AppProvider value={ this.state }>
        <ApolloProvider client={client}>
          <Router history={createBrowserHistory()}>
            <div className="App">
              <Switch>
                <Route path="/blogs" component={BlogRoutes} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route path="/account" component={Account} />
                <Route exact path="/" component={Landing} />
              </Switch>
            </div>
          </Router>
        </ApolloProvider>
      </AppProvider>
    );
  }

  refreshScreenType = () => {
    const screenType = getScreenType();
    if (this.state.screenType !== screenType) {
      return this.setState({ screenType });
    }
  }
}

export default App;
