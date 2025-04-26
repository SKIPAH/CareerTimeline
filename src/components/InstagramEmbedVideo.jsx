import { InstagramEmbed } from "react-social-media-embed";
import React from "react";

const InstagramEmbedVideo = ({ embedURL }) => {
  return (
    <InstagramEmbed
      url={`https://www.instagram.com/p/${embedURL}/`}
      className="instagram-embed"
    ></InstagramEmbed>
  );
};

export default InstagramEmbedVideo;
