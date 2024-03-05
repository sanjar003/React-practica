import { useState } from "react";

function Slojnyi() {
  const [count, setCount] = useState(0);
  const [value, setIncre] = useState(5);

  function inc() {
    setCount((prev) => prev + +value);
  }

  return (
    <div>
      <h1> Счетчие{count}</h1>
      <button onClick={inc}>click</button>
      <>
        <input
          value={value}
          onChange={(e) => setIncre(parseInt(e.target.value))}
        />
      </>
    </div>
  );
}

export default Slojnyi;
