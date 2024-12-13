import { Tweet } from "react-tweet";

export default function TweetEmbed({ tweetId }) {
  return (
    <div data-theme="dark">
      <Tweet id={tweetId} />

    </div>
  );
}
