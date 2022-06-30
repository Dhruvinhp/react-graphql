import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Box, SubText } from "../static/styles";

const Launches = () => (
  <Query
    query={gql`
      {
        launches {
          mission_name
          mission_id
          rocket {
            rocket_name
            rocket {
              company
              name
              mass {
                kg
              }
            }
          }
          launch_site {
            site_name
          }
          launch_date_local
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
            <SubText>Error :( {error}</SubText>
          </Box>
        );
      return (
        <Box>
          <SubText>Launches</SubText>
          <ul>
            {data.launches.map((launch, i) => (
              <li key={i}>
                <h3>{launch.mission_name}</h3>
                <p>
                  {launch.rocket.rocket_name} ({launch.rocket.rocket.company})
                </p>
                <p>
                  {launch.launch_site.site_name} ({launch.launch_date_local})
                </p>
              </li>
            ))}
          </ul>
        </Box>
      );
    }}
  </Query>
);

export default Launches;
