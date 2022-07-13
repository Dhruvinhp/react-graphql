import { gql } from "apollo-boost";

export const addBookMutation = gql`
  mutation ($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
      genre
    }
  }
`;

export const addAuthorMutation = gql`
  mutation ($name: String!, $age: ID!) {
    addAuthor(name: $name, age: $age) {
      id
      name
      age
    }
  }
`;
