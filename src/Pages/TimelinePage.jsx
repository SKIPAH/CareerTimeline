import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import TimelineElements from "../components/TimelineElements";

import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "../files/images/work.png";
import SchoolIcon from "../files/images/school.png";

export default function TimelinePage() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#F3D6A0" };

  return (
    <div className="timeline-div">
      <h1 className="timeline-title">Education and work experience</h1>
      <VerticalTimeline>
        {TimelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles} 
              icon={
                <img
                  src={isWorkIcon ? WorkIcon : SchoolIcon}
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
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
