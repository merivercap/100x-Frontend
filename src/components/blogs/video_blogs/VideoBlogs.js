import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Query } from 'react-apollo';

// HOCs
import Layout from '../../../HOCs/Layout';

// Components
import BlogPeek from '../BlogPeek';

// Utils
import { fetchVideoBlogs } from '../../../graphql/video_blogs_api';

class VideoBlogs extends React.Component {
  mapVideoBlogs() {
    /** TODO: fetch VideoBlogs from backend endpoint and map them into HTTML elements */
  }

  render() {
    return (
      <Layout>
        <Query query={ fetchVideoBlogs }>
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

export default VideoBlogs;