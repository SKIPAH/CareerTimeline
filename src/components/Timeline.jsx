import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import TimelineElements from "./TimelineElements";
import "react-vertical-timeline-component/style.min.css";
import { getTranslation } from "./Translations";
import { useLanguage } from "../hooks/useLanguage";
import { Button } from "react-bootstrap";
import { useScrollAnimation } from "./ScrollAnimation";

export default function Timeline() {
  const IconStyles = { background: "#FFD22B" };
  const currentLanguage = useLanguage();
  useScrollAnimation();

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="timeline-div">
      <h1 className="timeline-title hidden">
        {getTranslation("timeline-title-text", currentLanguage)}
      </h1>
      <VerticalTimeline>
        {TimelineElements[currentLanguage].map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";
          let showButton2 =
            element.buttonText2 !== undefined &&
            element.buttonText2 !== null &&
            element.buttonText2 !== "";

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={IconStyles}
              icon={
                <img
                  src={element.icon}
                  alt="icon"
                  style={{ width: "100%", height: "100%" }}
                />
              }
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  target="_blank"
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href={element.buttonLink}
                >
                  {element.buttonText}
                </a>
              )}
              {showButton2 && (
                <a
                  target="_blank"
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href={element.buttonLink2}
                >
                  {element.buttonText2}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <Button id="to-top-button-timeline" onClick={toTop}>
        {getTranslation("back-to-top-text", currentLanguage)}
      </Button>
    </div>
  );
}
