import monkeAudio from "../files/audio/monke.mp3";
import React, { useState, useEffect } from "react";

function DragonBall({ src }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    playAudio();
  }, [value]);

  function playAudio() {
    new Audio(monkeAudio).play();
  }
  return <img src={src} onClick={() => setValue(value + 1)}></img>;
}

export default DragonBall;
