import { InstagramEmbed } from "react-social-media-embed";
import React from "react";

function InstagramEmbedVideo({ embedURL }) {
  return (
    <>
      <InstagramEmbed
        url={`https://www.instagram.com/p/${embedURL}/`}
      ></InstagramEmbed>
    </>
  );
}

export default InstagramEmbedVideo;
