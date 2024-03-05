import React, { useState } from "react";

function RandomNumber() {
  const [random, setRandom] = useState();

  const randomNumber = () => {
    const randomNum = Math.floor(Math.random() * 1000); 
    setRandom(randomNum);
  };

  return (
    <div>
      <p> Number: {random !== null ? random : "Click  random number"}</p>
      <button onClick={randomNumber}>Random </button>
    </div>
  );
}

export default RandomNumber;
