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
            <div className="wallet-actions">
              <button>Transfer</button>
              <button>Claim</button>
            </div>
            <article>
              <div className="item">
                <div className="left">
                  <div className="item-icon"></div>
                  <span>Steem</span>
                </div>
                <div className="right">
                  7 STEEM
                </div>
              </div>
              <div className="item center">
                <button>
                  Power Up
                </button>
                <button>
                  Power Down
                </button>
              </div>
              <div className="item">
                <div className="left">
                  <div className="item-icon"></div>
                  <span>Steem Power</span>
                </div>
                <div className="right">
                  3.017 SP
                </div>
              </div>
              <div className="item">
                <div className="left">
                  <div className="item-icon"></div>
                  <span>Steem Dollar</span>
                </div>
                <div className="right">
                  0 SBD
                </div>
              </div>
              <div className="item">
                <div className="left">
                  <div className="item-icon"></div>
                  <span>Est. Account Value</span>
                </div>
                <div className="right">
                  $8.42
                </div>
              </div>
            </article>
            <h3>Transaction History</h3>
            <article>
              <div className="item">
                <div className="left">
                  <div className="item-img"></div>
                  <div className="item-info">
                    <h5>Received from steemrollin</h5>
                    <span>2 months ago</span>
                  </div>
                </div>
                <p>+ 10.000 STEEM</p>
              </div>
            </article>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Wallet;
