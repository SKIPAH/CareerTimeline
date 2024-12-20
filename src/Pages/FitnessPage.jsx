import YoutubeEmbed from "../components/YoutubeEmbed";
import InstagramEmbedVideo from "../components/InstagramEmbedVideo";
import { useLanguage } from "../hooks/useLanguage";
import { getTranslation } from "../components/Translations";
import TweetEmbed from "../components/TweetEmbed";
import NutritionLabel from "../components/NutritionLabel";
import { useScrollAnimation } from "../components/ScrollAnimation";

export default function Fitness() {
  const currentLanguage = useLanguage();
  useScrollAnimation();
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
      </section>
    </>
  );
}
