import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

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
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return (
          <div>
            <h2>Ships</h2>
            <ul>
              {data.ships.map((ship) => (
                <li key={ship.name}>
                  <h3>{ship.name}</h3>
                  <p>{ship.model}</p>
                  <p>{ship.type}</p>
                  <p>{ship.status}</p>
                </li>
              ))}
            </ul>
          </div>
        );
      }}
    </Query>
  );
};

export default Ships;
