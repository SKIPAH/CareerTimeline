import React, { use } from "react";
import { unityProjects } from "../components/UnityProjectConfig";
import UnityWebGL from "../components/UnityWebGL";

function GameDevPage() {
  return (
    <section className="dev-section">
      <div className="container">
        <h1 className="title-text">Game Development</h1>
      </div>
      <div className="container">
        <UnityWebGL config={unityProjects[1]}></UnityWebGL>
      </div>
    </section>
  );
}

export default GameDevPage;
