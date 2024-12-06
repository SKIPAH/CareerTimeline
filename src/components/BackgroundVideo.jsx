export default function BackgroundVideo({ src }) {
  return (
    <div>
      <video src={src} className="background-video" autoPlay loop muted></video>
    </div>
  );
}
