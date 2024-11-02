import videoBg from "../files/videos/bugati.mp4";

export default function BackgroundVideo() {
  return (
    <div>
      <video
        className="background-video"
        src={videoBg}
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
}
