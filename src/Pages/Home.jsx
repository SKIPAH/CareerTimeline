import { useState, useEffect } from "react";
import { getTranslation, getCurrentLocale } from "../components/Translations";
import profilepic from "../files/images/profiilikuva.png";

export default function Home() {
  const [currentLocale, setCurrentLocale] = useState(getCurrentLocale());

  // Update translations when locale changes
  useEffect(() => {
    const checkLocale = () => {
      const newLocale = getCurrentLocale();
      if (newLocale !== currentLocale) {
        setCurrentLocale(newLocale);
      }
    };
    
    // Check for locale changes
    const interval = setInterval(checkLocale, 100);
    return () => clearInterval(interval);
  }, [currentLocale]);

  return (
    <>
      <section className="introduction">
        <div className="intro">
          <img
            id="profilepic"
            src={profilepic}
            alt="profile picture"
          ></img>
          <h1 className="title-text">
            {getTranslation("homepage-title", currentLocale)}
          </h1>
        </div>
        <div className="container">
          <p className="introduction-text-short">
            {getTranslation("homepage-introduction-text-short", currentLocale)}
          </p>
          <p className="introduction-text-short">
            {getTranslation("homepage-introduction-text-short-note", currentLocale)}
          </p>
        </div>
        <div className="container">
          <p className="introduction-text">
            {getTranslation("homepage-introduction-text", currentLocale)}
          </p>
          <p className="introduction-text">
            {getTranslation("homepage-introduction-text-2", currentLocale)}
          </p>
        </div>
      </section>
    </>
  );
}
