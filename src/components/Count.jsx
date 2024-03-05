import { useState } from "react";

function Count() {
  const [count, setUset] = useState(0);

  function inc() {
    setUset(count + 1);
  }
  function deg() {
    if (count !== 0) {
      setUset(count - 1);
    }
  }
  return (
    <div>
      <h1> cc{count}</h1>
      <button onClick={inc}>click</button>
      <button onClick={deg}>click</button>
    </div> 
  );
}

export default Count;
