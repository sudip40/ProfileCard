import React from "react";
import Picture from "./Components/Picture";
import Description from "./Components/Description";
import Skill from "./Components/Skill";

function App() {
  return (
    <div style={{ border: "5px solid black", width: "40%" }}>
      <Picture
        link="https://drive.google.com/drive/home"
        name="ProfilePicture"
      />
      <Description />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "30px",
        }}
      >
        <Skill name="HTML" emoji="💪🏻" color="blue" />
        <Skill name="CSS" emoji="👌🏻" color="blue" />
        <Skill name="JS" emoji="💪🏻" color="blue" />
        <Skill name="React" emoji="👌🏻" color="blue" />
        <Skill name="Java" emoji="💪🏻" color="blue" />
      </div>
    </div>
  );
}

export default App;
