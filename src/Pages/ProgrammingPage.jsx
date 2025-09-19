import UnityWebGL from "../components/UnityWebGL";
import { useLanguage } from "../hooks/useLanguage";
import { getTranslation } from "../components/Translations";
import { useScrollAnimation } from "../components/ScrollAnimation";
import { unityProjects } from "../components/UnityProjectConfig";
import htmllogo from "../files/images/techpics/html-logo.webp";
import csslogo from "../files/images/techpics/css-logo.webp";
import jslogo from "../files/images/techpics/js-logo.webp";
import webflowlogo from "../files/images/techpics/webflow.png";
import csharplogo from "../files/images/techpics/csharp-logo.webp";
import githublogo from "../files/images/techpics/github-logo.webp";
import reactlogo from "../files/images/techpics/react-logo.png";
import unitylogo from "../files/images/techpics/unity.webp";
import nodejslogo from "../files/images/techpics/node.webp";
import expresslogo from "../files/images/techpics/express-js.webp";
import React from "react";

export default function DevPage() {
  const currentLanguage = useLanguage();
  useScrollAnimation();

  return (
    <>
      <section className="dev-section">
        <div className="container">
          <h1 className="title-text hidden">
            {getTranslation("dev-title", currentLanguage)}
          </h1>
          <div>
            <p className="center">
              {getTranslation(
                "homepage-introduction-text-tech",
                currentLanguage
              )}
            </p>
            <div className="tech-used-container hidden-icons">
              <img id="html-logo" src={htmllogo}></img>
              <img id="css-logo" src={csslogo}></img>
              <img id="js-logo" src={jslogo}></img>
              <img id="webflow-logo" src={webflowlogo}></img>
              <img id="react-logo" src={reactlogo}></img>
              <img id="nodejs-logo" src={nodejslogo}></img>
              <img id="express-logo" src={expresslogo}></img>
              <img id="c#-logo" src={csharplogo}></img>
              <img id="unity.logo" src={unitylogo}></img>
              <img id="github-logo" src={githublogo}></img>
            </div>
          </div>
          <div className="flex-row">
            <a
              href="https://www.linkedin.com/in/jussi-mehtala/"
              target="_blank"
            >
              Linkedin
            </a>{" "}
            <a href="https://github.com/SKIPAH" target="_blank">
              GitHub
            </a>{" "}
            <p>
              {getTranslation("dev-download", currentLanguage)}{" "}
              <a
                href="/jussi_mehtälä_CV_english.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </a>{" "}
            </p>
            <p>
              {getTranslation("dev-download", currentLanguage)}{" "}
              <a
                href="/jussi_mehtälä_PORTFOLIO_english.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </p>
          </div>

          <p className="center">
            <a
              href="https://www.theseus.fi/handle/10024/856201"
              target="_blank"
            >
              {getTranslation("dev-thesis", currentLanguage)}
            </a>
            <br></br>
            <a
              href="https://jussiprojects.itch.io/webglnucutest?secret=BtYgvJZZzU2b0GynO4y9q7XY5WU"
              target="_blank"
            >
              {getTranslation("dev-itch", currentLanguage)}
            </a>
          </p>
        </div>
        <div className="container">
          <p className="center">
            {getTranslation("dev-webgl", currentLanguage)}
          </p>
          <p className="center">
            {getTranslation("dev-webgl-note", currentLanguage)}
          </p>
          <UnityWebGL
            config={unityProjects[0]}
            className="unity-webgl"
          ></UnityWebGL>
        </div>
      </section>
    </>
  );
}
