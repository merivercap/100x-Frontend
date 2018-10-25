import React from 'react';
import { Query } from 'react-apollo';

import { GET_ALL_POST_REPLIES } from '../../graphql/replies_api';

// Components
import Layout from '../../HOCs/Layout';
import { GqlError, Loading } from '../shared';
import Reply from './Reply';
import ReplyForm from './ReplyForm';

const Replies = ({ post }) => (
  <Layout>
    <Query query={ GET_ALL_POST_REPLIES } variables={{ postId: post.id }}>
      {({ data, error, loading }) => {
        if (loading) return <Loading />;
        if (error) return <GqlError error={ error } />;
        const replies = data.getAllPostReplies;
        return (
          <section className="replies">
            <div className="replies--content">
              <h1>Replies</h1>
              <ReplyForm post={post} />
              { replies.map(reply => <Reply reply={reply} key={reply.id} />) }
            </div>
          </section>
        );
      }}
    </Query>
  </Layout>
);

export default Replies;
