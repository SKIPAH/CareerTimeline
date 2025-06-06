import React from "react";
import assembly from "../files/images/nyyrikkipictures/assembly.webp";
import skipah4 from "../files/images/nyyrikkipictures/skipah4.webp";
import skipahuusi from "../files/images/nyyrikkipictures/skipahuusi.jpg";
import nyyrikkiskipah2 from "../files/images/nyyrikkipictures/nyyrikkiskipah2.png";
import skipah3 from "../files/images/nyyrikkipictures/skipah3.webp";
import ebinsda from "../files/images/nyyrikkipictures/ebinsda.png";
import nyyrikkiskipah from "../files/images/nyyrikkipictures/nyyrikkiskipah.jpg";
export default function HorizontalPictures() {
  return (
    <>
      <div className="gallery-wrap">
        <img src="" id="backButton"></img>
        <img src="" id="nextButton"></img>
      </div>
      <div className="gallery">
        <span>
          <img className="widerpic" src={assembly}></img>
        </span>
        <span>
          <img className="widerpic" src={ebinsda}></img>
        </span>
        <span>
          <img src={nyyrikkiskipah}></img>
        </span>
        <span>
          <img src={nyyrikkiskipah2}></img>
        </span>
        <span>
          <img src={skipahuusi}></img>
        </span>
        <span>
          <img className="widerpic" src={skipah3}></img>
        </span>
        <span>
          <img className="widerpic" src={skipah4}></img>
        </span>
      </div>
    </>
  );
}
