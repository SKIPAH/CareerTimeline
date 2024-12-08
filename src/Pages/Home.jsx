import { useLanguage } from "../hooks/useLanguage";
import { getTranslation } from "../components/Translations";
import profilepic from "../files/images/profiilikuva2.jpg";

import BackgroundVideo from "../components/BackgroundVideo";
import WebsiteVideo from "../files/videos/websitevideo.mp4";
import { useScrollAnimation } from "../components/ScrollAnimation";

export default function Home() {
  const currentLanguage = useLanguage();
  useScrollAnimation();
  return (
    <>
      <section className="homepage-introduction">
        <BackgroundVideo src={WebsiteVideo} />

        <div className="intro hidden">
          <img id="profilepic" src={profilepic} alt="profile picture"></img>
          <h1 className="title-text">
            {getTranslation("homepage-title", currentLanguage)}
          </h1>
        </div>

        <div className="container">
          <p className="introduction-text-short hidden">
            {getTranslation(
              "homepage-introduction-text-short-note",
              currentLanguage
            )}
          </p>
          <p className="introduction-text-short hidden">
            {getTranslation(
              "homepage-introduction-text-short",
              currentLanguage
            )}
          </p>
        </div>
        <div className="container">
          <p className="introduction-text hidden">
            {getTranslation("homepage-introduction-text", currentLanguage)}
          </p>
          <p className="introduction-text hidden">
            {getTranslation("homepage-introduction-text-2", currentLanguage)}
          </p>
        </div>
      </section>
    </>
  );
}
