import gql from 'graphql-tag';

const GET_CHARACTER_BY_NAME = gql`
  query characters($name: String) {
    characters(filter: { name: $name }) {
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

export default GET_CHARACTER_BY_NAME;
