// React
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// HOCs
import Layout from '../../../HOCs/Layout';

// Components
import Wallet from './Wallet';

class Account extends React.Component {
  render() {
    return (
      <Layout>
        Account
        <Switch>
          <Route exact path="/account/wallet" component={ Wallet } />
        </Switch>
      </Layout>
    );
  }
}

export default Account;
