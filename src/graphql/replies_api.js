import gql from 'graphql-tag';

export const BROADCAST_REPLY = gql`
  query broadcastReply($reply: Reply) {
    broadcastReply(reply: $reply) {
      id
      body
      children
      commenter {
        id
        name
        profileImageUrl
      }
      createdAt
      depth
      isDeleted
      netVotes
      parent {
        id
        commenter {
          id
          name
        }
      }
      pendingPayoutValue
      permLink
      post {
        id
        author {
          id
          name
        }
      }
    }
  }
`;

export const GET_ALL_POST_REPLIES = gql`
  query getAllPostReplies($postId: Int) {
    getAllPostReplies(postId: $postId) {
      id
      body
      children
      commenter {
        id
        name
        profileImageUrl
      }
      createdAt
      depth
      isDeleted
      netVotes
      parent {
        id
        commenter {
          id
          name
        }
      }
      pendingPayoutValue
      permLink
      post {
        id
        author {
          id
          name
        }
      }
    }
  }
`;
