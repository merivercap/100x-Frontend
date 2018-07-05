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
        title,
        body,
        author,
      }
    }
  `
);

export const deleteBlog = id => (
  gql``
);