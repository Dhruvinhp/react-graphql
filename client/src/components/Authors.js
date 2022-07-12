import React from "react";
import { Query } from "react-apollo";
import { Box, SubText } from "../static/styles";
import { getAuthorsQuery } from "../gql/queries";

const Authors = () => {
  return (
    <>
      <Query query={getAuthorsQuery}>
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
                <SubText>Error :({error}</SubText>
              </Box>
            );
          return (
            <Box>
              <SubText>Authors</SubText>
              <ul>
                {data.authors.map((author, i) => (
                  <li key={i}>
                    <h3>{author.name}</h3>
                  </li>
                ))}
              </ul>
            </Box>
          );
        }}
      </Query>
    </>
  );
};

export default Authors;
