import BackgroundVideo from "../components/BackgroundVideo";
import HorizontalPictures from "../components/HorizontalPictures";
import bugati from "../files/videos/bugati.mp4";
import cv from "/jussi_mehtälä_CV_english.pdf";
import { Document, Page } from "react-pdf";
import { useEffect, useState, useMemo, useCallback } from "react";
import CollectionDragonBalls from "../components/CollectionDragonBalls";
import DragonBall from "../components/DragonBall";
import twoStarDragonBall from "../files/images/dbz/2star.png";
import TweetEmbed from "../components/TweetEmbed";

export default function TestPage() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("LOL");
  const [liked, setLiked] = useState(true);

  const [name, setName] = useState("Vesa");
  const [age, setAge] = useState(50);

  function handleClick() {
    setCount(count + 1);
  }

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleLikeChange(e) {
    setLiked(e.target.checked);
  }
  return (
    <main className="dbz-section">
      <div className="dbz-container">
        <h1 className="title-text">TEST PAGE FOR NOW &#128511; &#128018;</h1>
        <p className="dbz-text"></p>
        <BackgroundVideo src={bugati} className="background-video" />
        <HorizontalPictures />
      </div>
      <CollectionDragonBalls></CollectionDragonBalls>
      <DragonBall id={2} src={twoStarDragonBall} />
      <Document file={cv}>
        <Page />
      </Document>
      <p onClick={handleClick}>count: {count}</p>
      <input value={text} onChange={handleTextChange} />
      <p>You typed: {text}</p>
      <button onClick={() => setText("hello")}>Reset</button>
      <div>
        <label>
          <input type="checkbox" checked={liked} onChange={handleLikeChange} />I
          liked this
        </label>
        <p>You {liked ? "liked" : "did not like"} this.</p>
      </div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setAge(age + 1)}>Increment age</button>
      <p>
        Hello, {name}. You are {age}.
      </p>
      <TweetEmbed tweetId="1688619094377930752"></TweetEmbed>
      
    </main>
  );
}
