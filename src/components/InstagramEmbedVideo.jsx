import { InstagramEmbed } from "react-social-media-embed";
import React from "react";

export default function InstagramEmbedVideo({ embedURL }) {
  return (
    <InstagramEmbed
      url={`https://www.instagram.com/p/${embedURL}/`}
      className="instagram-embed"
    ></InstagramEmbed>
  );
}

