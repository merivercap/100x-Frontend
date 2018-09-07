// React
import React from 'react';

// Apollo / GraphQL
import { Query } from 'react-apollo';

// HOCs
import Layout from '../../HOCs/Layout';

// Components

class Wallet extends React.Component {
  render() {
    return (
      <Layout>
        <div className="wallet-container">
          <section className="wallet">
            <article className="wallet-header">
              <div className="user-profile-image"></div>
              <h1>testUsername's Wallet</h1>
            </article>
            <article className="wallet-actions">
              <h4 className="wallet-action">
                Steem Balance: $13.73
              </h4>
              <button className="wallet-action">
                Claim
              </button>
              <button className="wallet-action">
                Mock data
              </button>
              <button className="wallet-action">
                Mock data
              </button>
            </article>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Wallet;
