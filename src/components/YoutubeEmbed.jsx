import React from "react";

const YoutubeEmbed = ({ embedId, className }) => (
  <div className={`video-responsive ${className || ""}`}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    ></iframe>
  </div>
);

export default YoutubeEmbed;
