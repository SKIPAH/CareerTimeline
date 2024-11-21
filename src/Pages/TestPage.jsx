import BackgroundVideo from "../components/BackgroundVideo";
import HorizontalPictures from "../components/HorizontalPictures";
import bugati from "../files/videos/bugati.mp4";
import cv from "/jussi_mehtälä_CV_english.pdf";
import { Document, Page } from "react-pdf";
import { useEffect, useState, useMemo, useCallback } from "react";

// Configuration array for Dragon Ball images
const DRAGON_BALLS = Array.from({ length: 7 }, (_, i) => ({
  id: i + 1,
  src: `src/files/images/dbz/${i + 1}star.png`,
  alt: `${i + 1} star dragon ball`,
}));

// Custom hook for audio
const useAudio = (src) => {
  const audio = useMemo(() => new Audio(src), [src]);
  return useCallback(() => audio.play(), [audio]);
};

export default function DbzPage() {
  const [count, setCount] = useState(0);
  const playMonkeSound = useAudio("src/files/audio/monke.mp3");

  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(event.key);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="dbz-section">
      <div className="dbz-container">
        <h1 className="title-text">TEST PAGE FOR NOW &#128511; &#128018;</h1>
        <p className="dbz-text"></p>
        <BackgroundVideo src={bugati} className="background-video" />
        <HorizontalPictures />
      </div>

      <div className="dragon-balls-container">
        {DRAGON_BALLS.map(({ id, src, alt }) => (
          <img
            key={id}
            src={src}
            alt={alt}
            onClick={playMonkeSound}
            loading="lazy"
          />
        ))}
      </div>

      <Document file={cv}>
        <Page />
      </Document>

      <p onClick={() => setCount((prev) => prev + 1)}>count: {count}</p>
    </main>
  );
}
