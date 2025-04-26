import React from "react";

const BackgroundVideo = ({ src, className }) => {
  // const isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
  return (
    <div>
      <video
        src={src}
        className="background-video"
        loop
        muted
        autoPlay
        playsInline
      ></video>
    </div>
  );
};

export default BackgroundVideo;
