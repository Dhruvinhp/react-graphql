import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const Missions = () => {
  return (
    <Query
      query={gql`
        {
          missions {
            name
            website
            manufacturers
            payloads {
              orbit
              nationality
              manufacturer
            }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return (
          <div>
            <h2>Missions</h2>
            <ul>
              {data.missions.map((mission) => (
                <li key={mission.name}>
                  <h3>{mission.name}</h3>
                  <a href={mission.website} target="_blank">
                    {mission.website}
                  </a>
                  <p>{mission.manufacturers}</p>
                </li>
              ))}
            </ul>
          </div>
        );
      }}
    </Query>
  );
};

export default Missions;
