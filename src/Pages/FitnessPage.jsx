import YoutubeEmbed from "../components/YoutubeEmbed";
import InstagramEmbedVideo from "../components/InstagramEmbedVideo";
import { useLanguage } from "../hooks/useLanguage";
import { getTranslation } from "../components/Translations";
import TweetEmbed from "../components/TweetEmbed";

export default function Fitness() {
  const currentLanguage = useLanguage();
  return (
    <>
      <section className="fitness-section">
        <div className="container">
          <h1 className="title-text">
            {getTranslation("fitness-title", currentLanguage)}
          </h1>
          <p className="fitness-text">
            {getTranslation("fitness-text", currentLanguage)}
          </p>
          <p className="fitness-text">
            {getTranslation("fitness-text-2", currentLanguage)}
          </p>
          <div className="embeds">
            <InstagramEmbedVideo embedURL="C1XDVxIMNAX"></InstagramEmbedVideo>
            <YoutubeEmbed
              embedId="8t4Bgw02xTI"
              className="fitness-embed"
            ></YoutubeEmbed>
            <TweetEmbed tweetId="1688619094377930752"></TweetEmbed>
          </div>
        </div>
      </section>
    </>
  );
}
