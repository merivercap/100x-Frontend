// React
import React from 'react';

// Apollo / GraphQL
import { Query } from 'react-apollo';
import { getProfileInformation } from '../../graphql/users_api';
import { GqlError, Loading } from '../shared';

const BlogHeader = ({ blog }) => {
  const payoutValue = parseInt(blog.pendingPayoutValue, 10).toFixed(2);
  const username = 'adetorrent';//localStorage.getItem('username');
  return (
    <Query query={ getProfileInformation } variables={{ name: username }}>
      {
        ({ loading, error, data }) => {
          if (loading) return <Loading/>;
          if (error) return <GqlError error={ error }/>
          const steemUser = data.getProfileInformation;
          if (!steemUser) return <div>You have no profile info to show yet!</div>
          return (
            <header className="blog-header">
              <section className="about-author">
                <div className="author-profile-pic" style={{ backgroundImage: `url(${steemUser.profileImageUrl})`}}></div>
                <div className="info">
                  <h3>
                    {blog.author}
                  </h3>
                  <p>
                    {blog.created}
                  </p>
                </div>
              </section>
              <section>
                <h2>
                  ${payoutValue}
                </h2>
                <p>
                  {/* { blog.readTime } */}
                </p>
              </section>
            </header>
          );
        }
      }
    </Query>
  );
}

export default BlogHeader;
