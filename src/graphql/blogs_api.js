import gql from 'graphql-tag';

export const createBlog = gql`
  query broadcastPost($post: Post) {
    broadcastPost(post: $post) {
      id
      author {
        id
        name
        profileImageUrl
      }
      permLink
      title
      body
      createdAt
      netVotes
      children
      pendingPayoutValue
      trending
      hot
      postType
      tag1
      tag2
      tag3
      tag4
      tag5
    }
  }
`;

// export const updateBlog = gql`

// `;

export const fetchBlog = gql`
  query fetchBlog($postId: Int!) {
    getPost(postId: $postId) {
      id
      author {
        id
        name
        profileImageUrl
      }
      permLink
      title
      body
      createdAt
      netVotes
      children
      pendingPayoutValue
      trending
      hot
      postType
      tag1
      tag2
      tag3
      tag4
      tag5
    }
  }
`;

/** fetching author and replies breaks query */
export const fetchBlogs = gql`
  query {
    getAllPosts{
      id
      author {
        id
        name
        profileImageUrl
      }
      # replies {
      #   id
      #   commenter { id }
      #   post { id }
      #   parent { id }
      #   permLink
      #   body
      #   createdAt
      #   netVotes
      #   pendingPayoutValue
      #   children
      #   depth
      # }
      permLink
      title
      body
      createdAt
      netVotes
      children
      pendingPayoutValue
      trending
      hot
      postType
      tag1
      tag2
      tag3
      tag4
      tag5
    }
  }
`;

export const getPostsByType = gql`
  query getPostsByType($postType: String!) {
    getPostsByType(postType: $postType) {
      id
      author {
        id
        name
        profileImageUrl
      }
      # replies {
      #   id
      #   commenter { id }
      #   post { id }
      #   parent { id }
      #   permLink
      #   body
      #   createdAt
      #   netVotes
      #   pendingPayoutValue
      #   children
      #   depth
      # }
      permLink
      title
      body
      createdAt
      netVotes
      children
      pendingPayoutValue
      trending
      hot
      postType
      tag1
      tag2
      tag3
      tag4
      tag5
    }
  }
`;

export const getUserFeed = gql`
  query getUserFeed {
    getUserFeed {
      id
      author {
        id
        name
        profileImageUrl
      }
      # replies {
      #   id
      #   commenter { id }
      #   post { id }
      #   parent { id }
      #   permLink
      #   body
      #   createdAt
      #   netVotes
      #   pendingPayoutValue
      #   children
      #   depth
      # }
      permLink
      title
      body
      createdAt
      netVotes
      children
      pendingPayoutValue
      trending
      hot
      postType
      tag1
      tag2
      tag3
      tag4
      tag5
    }
  }
`;
