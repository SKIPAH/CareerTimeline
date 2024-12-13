import { useEffect, useState } from "react";
import NutritionLabel from "../components/NutritionLabel";
import ServerTest from "../components/ServerTest";

export default function TestPage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

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

  return (
    <div>
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
        <ServerTest></ServerTest>
      </div>
    </div>
  );
}
