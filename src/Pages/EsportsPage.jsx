import YoutubeEmbed from "../components/YoutubeEmbed";
import HorizontalPictures from "../components/HorizontalPictures";
import assembly from "../files/images/nyyrikkipictures/assembly.jpg";
import skipah4 from "../files/images/nyyrikkipictures/skipah4.JPG";
import skipahuusi from "../files/images/nyyrikkipictures/skipahuusi.jpeg";
import nyyrikkiskipah2 from "../files/images/nyyrikkipictures/nyyrikkiskipah2.png";
import skipah3 from "../files/images/nyyrikkipictures/skipah3.JPG";
import { useLanguage } from "../hooks/useLanguage";
import { getTranslation } from "../components/Translations";

export default function EsportsPage() {
  const currentLanguage = useLanguage();
  return (
    <>
      <section className="esports-section">
        <div className="container">
          <h1 className="title-text">
            {getTranslation("esports-title-text", currentLanguage)}
            <img
              className="image"
              src={assembly}
              alt="Assembly Summer 2018 stage picture of SKIPAH"
            ></img>
          </h1>
          <div className="esports-introduction">
            <img
              className="image"
              src={skipah4}
              alt="Lantrek BYOC picture. First lan event"
            ></img>
            <p className="esports-text">
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
            <p className="esports-text">
              {getTranslation("esports-text-3", currentLanguage)}
            </p>
            <img
              className="image"
              src={nyyrikkiskipah2}
              alt="Lantrek BYOC Picture with Nyyrikki Beanie on"
            ></img>
          </div>
          <div className="esports-introduction">
            <img
              className="image"
              src={skipah3}
              alt="SKIPAH and Jönssöni watching Battalion showmatch at Lantrek"
            ></img>
            <p className="esports-text">
              {getTranslation("esports-text-4", currentLanguage)}
            </p>
          </div>
          <div className="esports-introduction">
            <p className="esports-text">
              {getTranslation("esports-text-5", currentLanguage)}
            </p>
            <img
              className="image"
              src={skipahuusi}
              alt="Newest playerpicture"
            ></img>
          </div>
          <div className="esports-introduction">
            <p className="esports-text">
              {getTranslation("esports-text-6", currentLanguage)}
            </p>
          </div>
          <div className="esports-introduction">
            <p className="esports-text">
              {getTranslation("esports-text-movie-1", currentLanguage)}
              <a href="https://x.com/mauserzjeh">Mauser.</a>
            </p>
            <YoutubeEmbed
              className="esports-youtube-embed"
              embedId="4MIz6BQikh4"
            ></YoutubeEmbed>
          </div>
          <div className="esports-introduction">
            <YoutubeEmbed
              className="esports-youtube-embed"
              embedId="uY3LpNTSYqg"
            ></YoutubeEmbed>
            <p className="esports-text">
              {getTranslation("esports-text-movie-2", currentLanguage)}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
