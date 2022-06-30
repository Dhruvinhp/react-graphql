import React from "react";
import {NavBar, HeadText, HeadBox, NavLink} from "../static/styles"

const Main = () => {
  return (
    <HeadBox>
      <HeadText>SpaceX</HeadText>
      <NavBar>
        <NavLink to="/launches">Launches</NavLink>
        <NavLink to="/ships">Ships</NavLink>
        <NavLink to="/missions">Missions</NavLink>
      </NavBar>
    </HeadBox>
  );
};

export default Main;
