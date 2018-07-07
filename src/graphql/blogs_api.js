import gql from 'graphql-tag';

export const createBlog = blog => (
  gql``
);

export const updateBlog = blog => (
  gql``
);

export const fetchBlog = id => (
  gql``
);

export const fetchBlogs = () => (
  gql`
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
  `
);

export const deleteBlog = id => (
  gql``
);
