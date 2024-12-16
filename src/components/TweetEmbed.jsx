import { Tweet } from "react-tweet";

export default function TweetEmbed({ tweetId }) {
  return (
    <div data-theme="dark" className="tweet-embed">
      <Tweet id={tweetId} />

    </div>
  );
}
