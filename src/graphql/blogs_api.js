import gql from 'graphql-tag';

// export const createBlog = gql`

// `;

// export const updateBlog = gql`

// `;

// const selectCustomer = gql`
//   query selectCustomer($id: String!)
//   {
//     consumer(id: $id) {
//       id
//       firstname
//       lastname
//       dateOfBirth
//     }
//   }
// `;

export const fetchBlog = gql`
  query fetchBlog($postId: Int!) {
    getPost(postId: $postId) {
      id
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



// export const deleteBlog = gql`

// `;
