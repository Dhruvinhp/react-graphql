import React from "react";
import {NavBar, HeadText, HeadBox, NavLink} from "../static/styles"

const Main = () => {
  return (
    <HeadBox>
      <HeadText>Reading Lists</HeadText>
      <NavBar>
        <NavLink to="/books">BookList</NavLink>
        <NavLink to="/authors">AuthorList</NavLink>
      </NavBar>
    </HeadBox>
  );
};

export default Main;
