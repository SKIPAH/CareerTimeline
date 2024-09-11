import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import TimelineElements from "../timelineElements";

import "react-vertical-timeline-component/style.min.css";

export default function TimelinePage() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#F3D6A0" };

  return (
    <>
      <h1>Timeline</h1>
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
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles} //CHANGE LATER
              // icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && <a href="/">{element.buttonText}</a>}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </>
  );
}
