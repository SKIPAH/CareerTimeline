import videoBg from "../files/videos/stickyricky.mp4";

export default function BackgroundVideo() {
  return (
    <div className="background-video">
      <video src={videoBg} autoPlay loop muted></video>
    </div>
  );
}
