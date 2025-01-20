import { useEffect, useState } from "react";
import NutritionLabel from "../components/NutritionLabel";
import axios from "axios";

export default function TestPage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [personalBestLifts, setPersonalBestLifts] = useState({
    squat: 0,
    bench: 0,
    deadlift: 0,
  });

  useEffect(() => {
    function handleMove(e) {
      const newPosition = { x: e.clientX, y: e.clientY };
      console.log("Mouse position:", newPosition); // Added console.log
      setPosition(newPosition);
    }
    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/lifts")
      .then((response) => setPersonalBestLifts(response.data))
      .catch((error) => console.error("Error fetching lifts", error));
  }, []);

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "pink",
          borderRadius: "50%",
          opacity: 0.6,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
        }}
      ></div>
      <div className="test1">
        <NutritionLabel></NutritionLabel>
      </div>
      <div>
        <h2>Personal bests</h2>
        <p>Squat: {personalBestLifts.squat}</p>
        <p>Bench: {personalBestLifts.bench}</p>
        <p>Deadlift: {personalBestLifts.deadlift}</p>
      </div>
    </>
  );
}
