import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Query } from 'react-apollo';

// HOCs
import Layout from '../../../HOCs/Layout';

// Components
import BlogPeek from '../BlogPeek';

// Utils
import { fetchNewsBlogs } from '../../../utils/graphql/news_blogs_api';

class NewsBlogs extends React.Component {
  mapNewsBlogs() {
    /** TODO: fetch NewsBlogs from backend endpoint and map them into HTTML elements */
  }

  render() {
    return (
      <Layout>
        <Query query={ fetchNewsBlogs }>
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

export default NewsBlogs;