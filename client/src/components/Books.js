import React from "react";
import { Query } from "react-apollo";
import { Box, SubText } from "../static/styles";
import { getBooksQuery } from "../gql/queries";
import AddBook from "./AddBook";

const Books = () => (
  <>
    <Query query={getBooksQuery}>
      {({ loading, error, data }) => {
        if (loading)
          return (
            <Box>
              <SubText>Loading...</SubText>
            </Box>
          );
        if (error)
          return (
            <Box>
              <SubText>Error :( {error}</SubText>
            </Box>
          );
        return (
          <Box>
            <SubText>Books</SubText>
            <ul>
              {data.books.map((launch, i) => (
                <li key={i}>
                  <h3>{launch.name}</h3>
                </li>
              ))}
            </ul>
          </Box>
        );
      }}
    </Query>
    <AddBook />
  </>
);

export default Books;
