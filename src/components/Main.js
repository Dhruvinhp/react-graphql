import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <h1>SpaceX Info</h1>
      <nav>
      <Link to='/launches'>Launches</Link>
      <Link to='/ships'>Ships</Link>
      <Link to='/missions'>Missions</Link>
      </nav>
    </>
  );
};

export default Main;
