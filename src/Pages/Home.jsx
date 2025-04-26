import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import { getTranslation } from "../components/Translations";
import profilepic from "../files/images/profiilikuva2.webp";
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
import BackgroundVideo from "../components/BackgroundVideo";
import WebsiteVideo from "../files/videos/websitevideo.mp4";
import { useScrollAnimation } from "../components/ScrollAnimation";
import Timeline from "../components/Timeline";
import { Button } from "react-bootstrap";

export default function Home() {
  const currentLanguage = useLanguage();
  useScrollAnimation();
  return (
    <>
      <section className="homepage-introduction">
        <div className="video-section">
          <BackgroundVideo src={WebsiteVideo} />
        </div>
        <div className="intro">
          <img
            className="hidden"
            id="profilepic"
            src={profilepic}
            alt="picture of Jussi Mehtälä"
          ></img>
          <h1 className="title-text hidden">
            JUSSI MEHTÄLÄ
            <br />
            {getTranslation("homepage-title", currentLanguage)}
          </h1>
        </div>
        <div className="container">
          <div className="flex-container">
            <p className="introduction-text-short">
              {getTranslation(
                "homepage-introduction-text-short",
                currentLanguage
              )}
            </p>
          </div>
        </div>
        <div className="container">
          {/* <Button className="CTA-button">Contact me!</Button>*/}
          <p className="introduction-text-tech">
            {getTranslation("homepage-introduction-text-tech", currentLanguage)}
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
          <p className="introduction-text">
            {getTranslation("homepage-introduction-text-2", currentLanguage)}
          </p>
        </div>
      </section>
      <Timeline></Timeline>
    </>
  );
}
