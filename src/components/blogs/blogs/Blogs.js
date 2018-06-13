import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Query } from 'react-apollo';

// HOCs
import Layout from '../../../HOCs/Layout';

// Components
import BlogPeek from '../BlogPeek';

// Utils
import { fetchBlogs } from '../../../utils/graphql/blogs_api';

class Blogs extends React.Component {
  mapBlogs() {
    /** TODO: fetch blogs from backend endpoint and map them into HTTML elements */
  }
  
  render() {
    return (
      <Layout>
        <Query query={ fetchBlogs }>
          {({ data, error, loading }) => {
            if (error) { return `${ error }`; }
            if (loading) { return `${ loading }`; }
            
            return (
              <Fragment>
                <section className="blogs">
                  <content>
                    <BlogPeek />
                  </content>
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
