import { useLanguage } from "../hooks/useLanguage";
import { getTranslation } from "../components/Translations";
import profilepic from "../files/images/profiilikuva2.jpg";
import htmllogo from "../files/images/techpics/html-logo.png";
import csslogo from "../files/images/techpics/css-logo.png";
import jslogo from "../files/images/techpics/js-logo.png";
import csharplogo from "../files/images/techpics/csharp-logo.png";
import githublogo from "../files/images/techpics/github-logo.png";
import reactlogo from "../files/images/techpics/react-logo.png";
import BackgroundVideo from "../components/BackgroundVideo";
import WebsiteVideo from "../files/videos/websitevideo.mp4";
import { useScrollAnimation } from "../components/ScrollAnimation";
import Timeline from "../components/Timeline";

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
            {getTranslation("homepage-title", currentLanguage)}
          </h1>
        </div>
        <div className="container">
          <p className="introduction-text-short-xmas hidden">Hyvää joulua ja onnellista uutta vuotta!</p>
          <p className="introduction-text-short-xmas hidden">Merry Christmas and Happy New Year!</p>
          <p className="introduction-text-short hidden">
            {getTranslation(
              "homepage-introduction-text-short",
              currentLanguage
            )}
          </p>
        </div>
        <div className="container">
          <p className="introduction-text-tech hidden">
            {getTranslation("homepage-introduction-text-tech", currentLanguage)}
          </p>
          <div className="tech-used-container hidden-icons">
            <img id="html-logo" src={htmllogo}></img>
            <img id="css-logo" src={csslogo}></img>
            <img id="js-logo" src={jslogo}></img>
            <img id="react-logo" src={reactlogo}></img>
            <img id="c#-logo" src={csharplogo}></img>
            <img id="github-logo" src={githublogo}></img>
          </div>
          <p className="introduction-text hidden">
            {getTranslation("homepage-introduction-text-2", currentLanguage)}
          </p>
        </div>
      </section>
      <Timeline></Timeline>
    </>
  );
}
