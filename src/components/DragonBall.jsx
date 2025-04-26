import monkeAudio from "../files/audio/monke.mp3";
import React, { useState, useEffect } from "react";



const ballCount = () => Number(localStorage.getItem("collectedAmount")) || 0;
export default function DragonBall({ id, src }) {
  const [collectedAmount, setCollectedAmount] = useState(ballCount());

  useEffect(() => {
    //collectDragonBall();
    localStorage.setItem("collectedAmount", collectedAmount.toString());
  }, [collectedAmount]);

  /*
  function collectDragonBall() {

    new Audio(monkeAudio).play();

    console.log(collectedAmount);
    
  }
    */

  return (
    <>
      <img
        className={`dragon-ball ${collectedAmount > 0 ? "collected" : ""}`}
        src={src}
        onClick={() => setCollectedAmount(collectedAmount + 1)}
        alt={`Dragon Ball ${id}`}
      ></img>
      <p>{collectedAmount}</p>
      <button onClick={() => localStorage.clear()}>Clear</button>
    </>
  );
}
