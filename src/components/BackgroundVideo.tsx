import React from "react";

type Props = {
  src: string;
  className?: string;
};
const BackgroundVideo = ({ src, className }: Props) => {
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
