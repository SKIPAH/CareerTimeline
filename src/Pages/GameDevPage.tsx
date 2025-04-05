import React, { use } from "react";
import { unityProjects } from "../components/UnityProjectConfig";
import UnityWebGL from "../components/UnityWebGL";
import { useScrollAnimation } from "../components/ScrollAnimation";
import { useLanguage } from "../hooks/useLanguage2";
import { getTranslation } from "../components/Translations2";

function GameDevPage() {
  useScrollAnimation(); // Initialize scroll animation
  return (
    <section className="dev-section">
      <div className="container">
        <h1 className="title-text hidden">Game Development</h1>
      </div>
      <div className="container">
        <UnityWebGL config={unityProjects[1]}></UnityWebGL>
      </div>
    </section>
  );
}

export default GameDevPage;
