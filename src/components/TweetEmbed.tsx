import React from "react";
import { Tweet } from "react-tweet";

type Props = {
  tweetId: string;
};

const TweetEmbed = ({ tweetId }: Props) => (
  <div data-theme="dark" className="tweet-embed">
    <Tweet id={tweetId} />
  </div>
);

export default TweetEmbed;
