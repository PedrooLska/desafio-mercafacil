import gql from 'graphql-tag';

const GET_CHARACTERS_BY_PAGE = gql`
  query characters($page: Int) {
    characters(page: $page) {
      results {
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
          name
          air_date
        }
      }
    }
  }
`;

export default GET_CHARACTERS_BY_PAGE;
