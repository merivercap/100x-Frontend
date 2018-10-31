// React
import React from 'react';

// Apollo / GraphQL
import { Query } from 'react-apollo';
import { GET_PROFILE_INFORMATION } from '../../../../graphql/users_api';

// HOCs
import Layout from '../../../../HOCs/Layout';

// Components
import { GqlError, Loading } from '../../../shared';


class Wallet extends React.Component {
  render() {
    const username = "adetorrent";// localStorage.getItem('username');
    console.log('username: ',username);
    return (
      <Layout>
        <Query query={GET_PROFILE_INFORMATION} variables={{ name: username }}>
          {
            ({ loading, error, data }) => {
              if (loading) return <Loading/>
              if (error) return <GqlError error={ error }/>
              const steemUser = data.GET_PROFILE_INFORMATION;
              if (!steemUser) return <div>You have no wallet data to show yet!</div>;
              return (
                <div className="wallet-container">
                  <section className="wallet">
                    <div className="wallet-actions">
                      <button>Transfer</button>
                      <button>Claim</button>
                    </div>
                    <article>
                      <div className="item">
                        <div className="left">
                          <div className="item-icon">
                            <img alt="steem" src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1539313680/steem_ernbpt.jpg" />
                          </div>
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
                          <div className="item-icon">
                            <img alt="lightning" src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1539314359/lightning_wx43lr.jpg" />
                          </div>
                          <span>Steem Power</span>
                        </div>
                        <div className="right">
                          3.017 SP
                        </div>
                      </div>
                      <div className="item">
                        <div className="left">
                          <div className="item-icon">
                            <img alt="dollar" src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1539314359/money_fw1g6g.jpg"/>
                          </div>
                          <span>Steem Dollar</span>
                        </div>
                        <div className="right">
                          0 SBD
                        </div>
                      </div>
                      <div className="item">
                        <div className="left">
                          <div className="item-icon">
                            <img alt="avatar" src="https://res.cloudinary.com/ddgtwtbre/image/upload/v1539314358/avatar_nt5vnh.jpg"/>
                          </div>
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
                          <div className="item-img" style={{ backgroundImage: `url(${steemUser.profileImageUrl})`}}></div>
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
              );
            }
          }
        </Query>
      </Layout>
    );
  }
}

export default Wallet;
