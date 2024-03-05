import React, { useState } from "react";

function Slojnyi() {
  const [count, setCount] = useState(3);
  const [check, setIncre] = useState("");

  function inc() {
    if (count % 2 === 0) {
      setIncre("true");
    } else {
      setIncre("false");
    }
  }

  return (
    <div>
      <h1>Счетчик: {count}</h1>
      <button onClick={inc}>click</button>
      {check ? <h1>Четный</h1> : <h1>Нечетный</h1>}
      <input
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value) || 0)}
      />
    </div>
  );
}

export default Slojnyi;
