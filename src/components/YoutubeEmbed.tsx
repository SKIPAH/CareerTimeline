import React from "react";
import PropTypes from "prop-types";

type Props = {
  embedId: string;
  className?: string;
};

const YoutubeEmbed = ({ embedId, className }: Props) => (
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

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
