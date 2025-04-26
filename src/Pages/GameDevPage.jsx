import React, { use } from "react";
import { unityProjects } from "../components/UnityProjectConfig";
import UnityWebGL from "../components/UnityWebGL";
import { getTranslation } from "../components/Translations";
import { useLanguage } from "../hooks/useLanguage";

function GameDevPage() {
  const currentLanguage = useLanguage();
  return (
    <section className="dev-section">
      <div className="container">
        <h1 className="title-text">Game Development</h1>
      </div>
      <div>
        <p className="game-dev-description">
          {getTranslation("game-dev-description", currentLanguage)}
        </p>
      </div>
      <div className="container">
        <UnityWebGL config={unityProjects[1]}></UnityWebGL>
      </div>
    </section>
  );
}

export default GameDevPage;
