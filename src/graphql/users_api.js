import gql from 'graphql-tag';

export const GET_PROFILE_INFORMATION = gql`
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
