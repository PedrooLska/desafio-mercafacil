import gql from 'graphql-tag';

const GET_CHARACTERS_BY_PAGE = gql`
  query characters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        status
        species
        type
        gender
        image
        origin {
          id
          name
        }
        location {
          id
          name
        }
        episode {
          id
          name
          air_date
          episode
          characters {
            image
          }
        }
      }
    }
  }
`;

export default GET_CHARACTERS_BY_PAGE;
