import { InstagramEmbed } from "react-social-media-embed";
import React from "react";

function InstagramEmbedVideo({ embedURL }) {
  return (
    <InstagramEmbed
      url={`https://www.instagram.com/p/${embedURL}/`}
      className="instagram-embed"
    ></InstagramEmbed>
  );
}

export default InstagramEmbedVideo;
