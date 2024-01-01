import React from "react";

function Picture(props) {
  return <img src={props.link} alt={props.name} style={{ width: "100%" }} />;
}

export default Picture;
