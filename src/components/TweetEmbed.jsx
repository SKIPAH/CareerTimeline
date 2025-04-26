import React from "react";
import { Tweet } from "react-tweet";

const TweetEmbed = ({ tweetId }) => (
  <div data-theme="dark" className="tweet-embed">
    <Tweet id={tweetId} />
  </div>
);

export default TweetEmbed;
