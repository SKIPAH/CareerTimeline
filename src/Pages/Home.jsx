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
import oulunparturilogo from "../files/images/oulunparturilogo1.webp";
import BackgroundVideo from "../components/BackgroundVideo";
import WebsiteVideo from "../files/videos/websitevideo.mp4";
import { useScrollAnimation } from "../components/ScrollAnimation";
import Timeline from "../components/Timeline";
import { Button } from "react-bootstrap";
import ContactMe from "../components/ContactMe";

export default function Home() {
  const currentLanguage = useLanguage();
  useScrollAnimation();
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const toBottom = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  return (
    <>
      <section className="section-home">
        <div className="video-container">
          <BackgroundVideo src={WebsiteVideo} />
        </div>
        <div className="hero-container">
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
          <p className="center">
            {getTranslation(
              "homepage-introduction-text-short",
              currentLanguage
            )}
          </p>
        </div>
        <div className="container">
          <p className="center">
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
          <p className="center">
            {getTranslation("homepage-introduction-text-2", currentLanguage)}
          </p>

          <div className="CTA-wrapper">
            <p className="white">
              {getTranslation("contactMe-text", currentLanguage)}
            </p>
            <Button className="CTA-button" onClick={toBottom}>
              {getTranslation("contactMe-text-3", currentLanguage)}
            </Button>
          </div>
          <div className="padding center">
            <h2 className="title-text">
              {getTranslation("past-websites", currentLanguage)}
            </h2>
            <a href="https://www.oulun-parturi.fi">
              <img
                id="oulunparturilogo"
                src={oulunparturilogo}
                alt="Oulun Parturi logo"
              ></img>
            </a>
          </div>
        </div>
      </section>
      <Timeline></Timeline>
      <ContactMe></ContactMe>

      <Button id="to-top-button-timeline" onClick={toTop}>
        {getTranslation("back-to-top-text", currentLanguage)}
      </Button>
    </>
  );
}
