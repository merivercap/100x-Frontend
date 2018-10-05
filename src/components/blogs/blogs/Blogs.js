import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';

import { Query } from 'react-apollo';

// HOCs
import Layout from '../../../HOCs/Layout';

// Components
// import BlogPeek from '../BlogPeek';
import GqlError from '../../shared/GqlError';
import Loading from '../../shared/Loading';

// Utils
import { fetchBlogs } from '../../../graphql/blogs_api';

class Blogs extends React.Component {  
  render() {
    return (
      <Layout>
        <Query query={ fetchBlogs() }>
          {({ data, error, loading }) => {
            if (loading) return <Loading />
            if (error) return <GqlError error={ error } />
            
            return (
              <Fragment>
                <section className="blogs">
                  <div className="content">
                    { this.mapBlogs() }
                  </div>
                </section>
              </Fragment>
            );
          }}
        </Query>
      </Layout>
    );
  }
}

export default Blogs;
