import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Box, SubText } from "../static/styles";

const Missions = () => {
  return (
    <Query
      query={gql`
        {
          missions {
            name
            website
            manufacturers
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
              <SubText>Error :({error}</SubText>
            </Box>
          );
        return (
          <Box>
            <SubText>Missions</SubText>
            <ul>
              {data.missions.map((mission, i) => (
                <li key={i}>
                  <h3>{mission.name}</h3>
                  <a href={mission.website} target="_blank">
                    {mission.website}
                  </a>
                  <p>{mission.manufacturers}</p>
                </li>
              ))}
            </ul>
          </Box>
        );
      }}
    </Query>
  );
};

export default Missions;
