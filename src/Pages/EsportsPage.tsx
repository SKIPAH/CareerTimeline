import YoutubeEmbed from "../components/YoutubeEmbed";
import assembly from "../files/images/nyyrikkipictures/assembly.webp";
import skipah4 from "../files/images/nyyrikkipictures/skipah4.webp";
import skipahuusi from "../files/images/nyyrikkipictures/skipahuusi.jpg";
import nyyrikkiskipah2 from "../files/images/nyyrikkipictures/nyyrikkiskipah2.png";
import hreds from "../files/images/nyyrikkipictures/hreds.webp";
import skipah3 from "../files/images/nyyrikkipictures/skipah3.webp";
import { useLanguage } from "../hooks/useLanguage2";
import { getTranslation } from "../components/Translations2";
import { Button } from "react-bootstrap";
import { useScrollAnimation } from "../components/ScrollAnimation";
import React from "react";

interface EsportsProps {
  embedId: string;
  className?: string;
}

export default function EsportsPage() {
  const currentLanguage = useLanguage();
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  useScrollAnimation();
  return (
    <>
      <section className="esports-section">
        <div className="container">
          <h1 className="title-text hidden">
            {getTranslation("esports-title-text", currentLanguage)}
            <img
              className="image hidden"
              src={assembly}
              alt="Assembly Summer 2018 stage picture of SKIPAH"
            ></img>
          </h1>
          <div className="esports-introduction hidden">
            <img
              className="image hidden"
              src={skipah4}
              alt="Lantrek BYOC picture. First lan event"
              loading="lazy"
            ></img>
            <p className="esports-text-first hidden">
              {getTranslation("esports-text", currentLanguage)}
              <a
                className="esports-link"
                href="https://liquipedia.net/overwatch/SKIPAH"
              >
                Liquidpedia
              </a>{" "}
              {getTranslation("esports-text-2", currentLanguage)}
            </p>
          </div>
          <div className="esports-introduction">
            <p className="esports-text hidden">
              {getTranslation("esports-text-3", currentLanguage)}
            </p>
            <img
              className="image hidden"
              src={nyyrikkiskipah2}
              alt="Lantrek BYOC Picture with Nyyrikki Beanie on"
              loading="lazy"
            ></img>
          </div>
          <div className="esports-introduction">
            <img
              className="image hidden"
              src={skipah3}
              alt="SKIPAH and Jönssöni watching Battalion showmatch at Lantrek"
              loading="lazy"
            ></img>
            <p className="esports-text hidden">
              {getTranslation("esports-text-4", currentLanguage)}
            </p>
          </div>
          <div className="esports-introduction">
            <p className="esports-text hidden">
              {getTranslation("esports-text-5", currentLanguage)}
            </p>
            <img
              className="image hidden"
              src={skipahuusi}
              alt="Newest playerpicture"
              loading="lazy"
            ></img>
          </div>
          <div className="esports-introduction">
            <p className="esports-text hidden">
              {getTranslation("esports-text-6", currentLanguage)}
            </p>
          </div>
          <div className="esports-introduction">
            <p className="esports-text hidden">
              {getTranslation("esports-text-7", currentLanguage)}
            </p>
          </div>
          <div className="esports-introduction">
            <p className="esports-text hidden">
              {getTranslation("esports-text-8", currentLanguage)}
            </p>
            <img className="image hidden" src={hreds} alt="hreds"></img>
          </div>
          <div className="esports-introduction-embed hidden">
            <p className="esports-text-first hidden">
              {getTranslation("esports-text-movie-1", currentLanguage)}
              <a href="https://x.com/mauserzjeh" className="esports-link">
                Mauser.
              </a>
            </p>
            <YoutubeEmbed
              className="esports-youtube-embed"
              embedId="4MIz6BQikh4"
            ></YoutubeEmbed>
          </div>
          <div className="esports-introduction-embed hidden">
            <YoutubeEmbed
              className="esports-youtube-embed"
              embedId="uY3LpNTSYqg"
            ></YoutubeEmbed>
            <p className="esports-text hidden">
              {getTranslation("esports-text-movie-2", currentLanguage)}
            </p>
          </div>
          <Button id="to-top-button-esports" onClick={toTop}>
            {getTranslation("back-to-top-text", currentLanguage)}
          </Button>
        </div>
      </section>
    </>
  );
}
