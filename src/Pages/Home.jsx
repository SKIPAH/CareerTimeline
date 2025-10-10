import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import { getTranslation } from "../components/Translations";
import profilepic from "../files/images/work/profiilikuva2.webp";
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
import oulunparturilogo from "../files/images/work/oulunparturilogo1.webp";
import overwatchlogo from "../files/images/work/overwatch.webp";
import valorantlogo from "../files/images/work/valorant.webp";
import nyyrikkilogo from "../files/images/work/nyyrikki.webp";
import vastalogo from "../files/images/work/vasta.webp";
import hredslogo from "../files/images/work/hreds.webp";
import farcanalogo from "../files/images/work/farcana.webp";
import supermoveslogo from "../files/images/work/supermoves.webp";
import mypethooliganlogo from "../files/images/work/mph.webp";
import BackgroundVideo from "../components/BackgroundVideo";
import WebsiteVideo from "../files/videos/websitevideo.mp4";
import { useScrollAnimation } from "../components/ScrollAnimation";
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
            {/*   {getTranslation("homepage-title", currentLanguage)}*/}
          </h1>
        </div>
        <div className="container">
          <p className="center">
            {/*    {getTranslation(
              "homepage-introduction-text-short",
              currentLanguage
            )} */}
          </p>
        </div>
        <div className="container">
          {/* 
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
          */}
          <div className="padding center">
            <h2 className="title-text">
              {getTranslation("past-websites", currentLanguage)}
            </h2>
            <div className="logo-row">
              <div className="logo-hover-group">
                <a href="https://www.oulun-parturi.fi" target="_blank">
                  <h3 className="title-text-smaller">Oulun Parturi</h3>
                  <img
                    id="hoverlogos"
                    src={oulunparturilogo}
                    alt="Oulun Parturi logo"
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <div className="padding center">
            <h2 className="title-text">
              {getTranslation("past-games", currentLanguage)}
            </h2>
            <div className="logo-row">
              <div className="logo-hover-group">
                <a href="https://overwatch.blizzard.com/en-us/" target="_blank">
                  <h3 className="title-text-smaller">Overwatch</h3>
                  <img
                    id="hoverlogosmaller"
                    src={overwatchlogo}
                    alt="Overwatch logo"
                  ></img>
                </a>
              </div>
              <div className="logo-hover-group">
                <a href="https://playvalorant.com/en-gb/" target="_blank">
                  <h3 className="title-text-smaller">Valorant</h3>
                  <img
                    id="hoverlogosmaller"
                    src={valorantlogo}
                    alt="Valorant logo"
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <div className="padding center">
            <h2 className="title-text">
              {getTranslation("past-teams", currentLanguage)}
            </h2>
            <div className="logo-row">
              <div className="logo-hover-group">
                <a
                  href="https://liquipedia.net/overwatch/NYYRIKKI_Esports"
                  target="_blank"
                >
                  <h3 className="title-text-smaller">Nyyrikki Esports</h3>
                  <img
                    id="hoverlogosmaller"
                    src={nyyrikkilogo}
                    alt="Nyyrikki logo"
                  ></img>
                </a>
              </div>
              <div className="logo-hover-group">
                <a
                  href="https://www.youtube.com/watch?v=wUGW7Q3EOv0"
                  target="_blank"
                >
                  <h3 className="title-text-smaller">Vasta Gaming</h3>
                  <img
                    id="hoverlogosmaller"
                    src={vastalogo}
                    alt="Vasta logo"
                  ></img>
                </a>
              </div>
              <div className="logo-hover-group">
                <a
                  href="https://www.is.fi/digitoday/esports/art-2000006704216.html"
                  target="_blank"
                >
                  <h3 className="title-text-smaller">Helsinki Reds</h3>
                  <img
                    id="hoverlogosmaller"
                    src={hredslogo}
                    alt="Helsinki Reds logo"
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <div className="padding center">
            <h2 className="title-text">
              {getTranslation("past-gametests", currentLanguage)}
            </h2>
            <div className="logo-row">
              <div className="logo-hover-group">
                <a
                  href="https://store.steampowered.com/app/3574840/My_Pet_Hooligan/"
                  target="_blank"
                >
                  <h3 className="title-text-smaller">My Pet Hooligan</h3>
                  <img
                    id="hoverlogos"
                    src={mypethooliganlogo}
                    alt="My pet hooligan logo"
                  ></img>
                </a>
              </div>
              <div className="logo-hover-group">
                <a href="https://makea.games/games/" target="_blank">
                  <h3 className="title-text-smaller">Supermoves</h3>
                  <img
                    id="hoverlogos"
                    src={supermoveslogo}
                    alt="Supermoves logo"
                  ></img>
                </a>
              </div>
              <div className="logo-hover-group">
                <a href="https://www.playfarcana.com/" target="_blank">
                  <h3 className="title-text-smaller">Farcana</h3>
                  <img id="hoverlogos" src={farcanalogo} alt=" logo"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactMe></ContactMe>

      <Button id="to-top-button-timeline" onClick={toTop}>
        {getTranslation("back-to-top-text", currentLanguage)}
      </Button>
    </>
  );
}
