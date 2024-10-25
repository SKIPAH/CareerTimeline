import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import TimelineElements from "./TimelineElements";
import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {
  let IconStyles = { background: "#ffb300" };

  return (
    <div className="timeline-div">
      <h1 className="timeline-title">Education and work experience</h1>
      <h2 className="timeline-secondary-title">
        Timeline made with React vertical timeline component
      </h2>
      <VerticalTimeline>
        {TimelineElements.map((element) => {
          let isWorkIcon = element.icon === "work"; //CHANGE THIS TO SOMETHING ELSE LATER
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={IconStyles} //CHANGE LATER
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
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href={element.buttonLink}
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
