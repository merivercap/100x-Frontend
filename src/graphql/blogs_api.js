import gql from 'graphql-tag';

// export const createBlog = gql`

// `;

// export const updateBlog = gql`

// `;

const selectCustomer = gql`
  query selectCustomer($id: String!)
  {
    consumer(id: $id) {
      id
      firstname
      lastname
      dateOfBirth
    }
  }
`;

// 55755699
export const fetchBlog = gql`
  query fetchBlog($postId: Int!) {
    getPost(postId: $postId) {
      id
      author
      body
      children
      created
      curator_payout_value
      hot
      net_votes
      permlink
      tag1
      title
      trending
    }
  }
`;

export const fetchBlogs = gql`
  {
    getAllPosts {
      id
      author
      body
      children
      created
      curator_payout_value
      hot
      net_votes
      permlink
      tag1
      title
      trending
    }
  }
`;

// export const deleteBlog = gql`

// `;
