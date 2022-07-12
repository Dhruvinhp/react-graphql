import { gql } from "apollo-boost";

export const getBooksQuery = gql`
  {
    books {
      id
      name
    }
  }
`;

export const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;

export const getBookDetailsQuery = gql`
  query ($id: String) {
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
