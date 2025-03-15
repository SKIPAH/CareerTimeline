import { InstagramEmbed } from "react-social-media-embed";
import React from "react";

type Props = {
  embedURL: string;
};

const InstagramEmbedVideo = ({ embedURL }: Props) => {
  return (
    <InstagramEmbed
      url={`https://www.instagram.com/p/${embedURL}/`}
      className="instagram-embed"
    ></InstagramEmbed>
  );
};

export default InstagramEmbedVideo;
