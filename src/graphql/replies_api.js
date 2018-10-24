import gql from 'graphql-tag';

export const GET_ALL_POST_REPLIES = gql`
  query getAllPostReplies($postId: ID!) {
    getAllPostReplies(postId: $postId) {
      id
      body
      children
      commenter
      createdAt
      depth
      isDeleted
      netVotes
      parent
      pendingPayoutValue
      permLink
      post
    }
  }
`;
