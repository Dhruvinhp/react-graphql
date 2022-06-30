import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Box, SubText } from "../static/styles";

const Ships = () => {
  return (
    <Query
      query={gql`
        {
          ships {
            model
            name
            type
            status
          }
        }
      `}
    >
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
              <SubText>Error :(</SubText>
            </Box>
          );
        return (
          <Box>
            <SubText>Ships</SubText>
            <ul>
              {data.ships.map((ship, i) => (
                <li key={i}>
                  <h3>{ship.name}</h3>
                  <p>{ship.model}</p>
                  <p>{ship.type}</p>
                  <p>{ship.status}</p>
                </li>
              ))}
            </ul>
          </Box>
        );
      }}
    </Query>
  );
};

export default Ships;
