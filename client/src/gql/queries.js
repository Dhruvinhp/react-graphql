import { gql } from "apollo-boost";

export const getBooksQuery = gql`
  {
    books {
      id
      name
      genre
    }
  }
`;

export const getAuthorsQuery = gql`
  {
    authors {
      id
      name
      age
    }
  }
`;

export const getBookDetailsQuery = gql`
  query ($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`;
