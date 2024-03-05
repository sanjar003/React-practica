import React from "react";
import { useState } from "react";

function Password() {
  const [count, setCount] = useState("");

  return (
    <div>
      <h1>{count}</h1>
      <input
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      {count === 12345 ? "Welcome" : "NE OK"}
    </div> 
  );
}

export default Password;


