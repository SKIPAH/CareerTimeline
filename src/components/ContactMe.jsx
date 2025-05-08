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
      <div className="contact-me-wrapper">
        <div className="contact-row">
          <span className="label">Email:</span>
          <a href="mailto:jussi.mehtala96@gmail.com" className="value">
            jussi.mehtala96@gmail.com
          </a>
        </div>
        <div className="contact-row">
          <span className="label">LinkedIn:</span>
          <a
            href="https://www.linkedin.com/in/jussi-mehtala/"
            className="value"
          >
            https://www.linkedin.com/in/jussi-mehtala/
          </a>
        </div>
        <div className="contact-row">
          <span className="label">Instagram:</span>
          <a href="https://www.instagram.com/skipaah/" className="value">
            https://www.instagram.com/skipaah/
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
