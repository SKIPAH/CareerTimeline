import YoutubeEmbed from "../components/YoutubeEmbed";
import InstagramEmbedVideo from "../components/InstagramEmbedVideo";
import { useLanguage } from "../hooks/useLanguage";
import { getTranslation } from "../components/Translations";
import TweetEmbed from "../components/TweetEmbed";
import NutritionLabel from "../components/NutritionLabel";
import { useScrollAnimation } from "../components/ScrollAnimation";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Fitness() {
  const currentLanguage = useLanguage();
  useScrollAnimation();

  const [personalBestLifts, setPersonalBestLifts] = useState({
    squat: 0,
    bench: 0,
    deadlift: 0,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/lifts")
      .then((response) => setPersonalBestLifts(response.data))
      .catch((error) => console.error("Error fetching lifts", error));
  }, []);

  return (
    <>
      <section className="fitness-section">
        <div className="container">
          <h1 className="title-text hidden">
            {getTranslation("fitness-title", currentLanguage)}
          </h1>
          <p className="fitness-text hidden">
            {getTranslation("fitness-text", currentLanguage)}
          </p>
          <p className="fitness-text hidden">
            {getTranslation("fitness-text-2", currentLanguage)}
          </p>
          <div className="embeds hidden">
            <InstagramEmbedVideo embedURL="C1XDVxIMNAX"></InstagramEmbedVideo>
            <TweetEmbed tweetId="1688619094377930752"></TweetEmbed>
            <div className="nutrition-label">
              <NutritionLabel></NutritionLabel>
            </div>
          </div>
          <div classname="embed-youtube">
            <YoutubeEmbed
              embedId="8t4Bgw02xTI"
              className="fitness-youtube-embed"
            ></YoutubeEmbed>
          </div>
        </div>
        <div>
          <h2>Personal bests</h2>
          <p>Squat: {personalBestLifts.squat}</p>
          <p>Bench: {personalBestLifts.bench}</p>
          <p>Deadlift: {personalBestLifts.deadlift}</p>
        </div>
      </section>
    </>
  );
}
