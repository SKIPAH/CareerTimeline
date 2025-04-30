import React from "react";
import { useLanguage } from "../hooks/useLanguage";
import { getTranslation } from "../components/Translations";

function ContactMe() {
  const currentLanguage = useLanguage();

  return (
    <div className="contact-me-container">
      <h2 className="title-text">
        {getTranslation("contactMe-text-3", currentLanguage)}
      </h2>
      <div>
        <div className="contact-me-wrapper">
          <div className="flex-row">
            <p>Email:</p>
            <a href="mailto:jussi.mehtala96@gmail.com">
              jussi.mehtala96@gmail.com
            </a>
          </div>
          <div className="flex-row">
            <p>LinkedIn:</p>
            <a href="https://www.linkedin.com/in/jussi-mehtala/">
              https://www.linkedin.com/in/jussi-mehtala/
            </a>
          </div>
          <div className="flex-row">
            <p>Instagram:</p>
            <a href="https://www.instagram.com/skipaah/">
              https://www.instagram.com/skipaah/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
