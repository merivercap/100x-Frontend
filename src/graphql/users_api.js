import gql from 'graphql-tag';

export const getProfileInformation = gql`
  query getProfileInformation($name: String!) {
    getProfileInformation(name: $name) {
      id
      name
      votingPower
      location
      realLifeName
      introBlurb
      reputationScore
      profileImageUrl
      posts {
        id
      }
      replies {
        id
      }
    }
  }
`;

export const createUser = user => (
  gql``
);

export const loginUser = credentials => (
  gql``
);

export const updateUser = user => (
  gql``
);

export const fetchUser = id => (
  gql``
);

export const fetchUsers = () => (
  gql``
);

export const deleteUser = id => (
  gql``
);