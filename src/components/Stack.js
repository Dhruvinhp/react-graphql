import React from "react";
import PropsTypes from "prop-types";

const Stack = ({ children, spacing = 2, direction = "row", wrap = false }) => {
  const style = {
    display: "flex",
    gap: `${spacing * 0.5}rem`,
    flexDirection: direction,
    flexWrap: wrap ? "wrap" : "nowrap",
  };
  return <div style={style}>{children}</div>;
};

Stack.propTypes = {
  spacing: PropsTypes.number,
  direction: PropsTypes.oneOf(["row", "column"]),
  wrap: PropsTypes.bool,
};

export default Stack;
