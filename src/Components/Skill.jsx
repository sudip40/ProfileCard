import React from "react";

function Skill({ color, name, emoji }) {
  return (
    <div
      style={{
        background: color,
        color: "white",
        textAlign: "center",
        fontSize: "20px",
        width: "15%",
        borderRadius: "10px",
      }}
    >
      {name}
      {emoji}
    </div>
  );
}

export default Skill;
