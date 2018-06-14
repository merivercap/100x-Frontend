import React from 'react';
import PropTypes from 'prop-types';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// HOCs
import Layout from '../../HOCs/Layout';

// Components
import Comment from './Comment';

class Comments extends React.Component {
  state = {
    blog: {},
    comments: {},
  };
  
  constructor(props) {
    super(props);

    this.state.blog = props.blog;
    this.state.comments = props.blog.comments;
  }
  
  mapComments() {
    /** TODO: fetch Comments from backend endpoint and map them into HTTML elements */
  }
  
  render() {
    return (
      <Layout>
        <section className="comments">
          <content>
            <Comment />
          </content>
        </section>
      </Layout>
    );
  }
}

export default Comments;