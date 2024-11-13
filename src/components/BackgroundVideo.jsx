export default function BackgroundVideo({ src }) {
  return (
    <video src={src} className="background-video" autoPlay loop muted></video>
  );
}
