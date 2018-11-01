import React from 'react';
import { Query } from 'react-apollo';

import { GET_ALL_POST_REPLIES } from '../../graphql/replies_api';

// Components
import { GqlError, Loading } from '../shared';
import Reply from './Reply';
import ReplyForm from './ReplyForm';

const Replies = ({ post }) => (
  <Query query={ GET_ALL_POST_REPLIES } variables={{ postId: post.id }}>
    {({ data, error, loading }) => {
      if (loading) return <Loading />;
      if (error) return <GqlError error={ error } />;
      const replies = data.getAllPostReplies;
      return (
        <section className="replies">
          <div className="replies--content">
            <ReplyForm post={post} />
            <h1>Replies</h1>
            { replies.map(reply => <Reply reply={reply} key={reply.id} />) }
          </div>
        </section>
      );
    }}
  </Query>
);

export default Replies;
