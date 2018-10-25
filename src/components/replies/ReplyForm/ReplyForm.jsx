import React from 'react';
import { compose, graphql } from 'react-apollo';

import { BROADCAST_REPLY, GET_ALL_POST_REPLIES } from '../../../graphql/replies_api';

class ReplyForm extends React.Component {
  state = {
    reply: {
      body: '',
      postAuthor: '',
      postPermLink: '',
    },
    errors: { },
  };

  componentDidMount() {
    const { post } = this.props;
    this.setState({
      reply: {
        body: '',
        postAuthor: post.author.name,
        postPermLink: post.permLink,
      },
    });
  }
  
  render() {
    return (
      <div className="reply-form-container">
        <h3>Write a reply</h3>
        <form>
          <textarea placeholder="Write your comment here.."></textarea>
          <div className="reply-form--actions">
            <button className="cancel-reply" type="button">Cancel</button>
            <button className="submit-reply" type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }

  onSubmit(event) {
    event.preventDefault();
    const { reply } = this.state;
    this.props.broadcastReply(reply);
  }
}

export default compose(
  graphql(BROADCAST_REPLY, {
    props: ({ mutate }) => ({
      broadcastReply: reply => {
        return mutate({
          variables: { reply },
          refetchQueries: [{ query: GET_ALL_POST_REPLIES }],
          update: (store, { data: { broadcastReply } }) => {
            if (!store.data.data.ROOT_QUERY) return;
            const { getAllPostReplies } = store.readQuery({ query: GET_ALL_POST_REPLIES });
            getAllPostReplies.push(broadcastReply);
            store.writeQuery({ query: GET_ALL_POST_REPLIES, data: { getAllPostReplies } });
          },
        });
      },
    }),
  })
)(ReplyForm);
