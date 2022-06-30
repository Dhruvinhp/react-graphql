import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

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
    {({ loading, error, data, }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return (
        <div>
            <h2>SPACEX Launches</h2>
          <ul>
            {data.launches.map((launch) => (
              <li key={launch.mission_id}>
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
        </div>
      );
    }}
  </Query>
);

export default Launches;
