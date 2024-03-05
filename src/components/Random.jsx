import React, { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("");

  const BackgroundColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <h1>цвет</h1>
      <input type="text" onChange={BackgroundColor} />
      <div style={{ background: color, width: "250px", height: "250px" }}></div>
    </div>
  );
}

export default ColorChanger;