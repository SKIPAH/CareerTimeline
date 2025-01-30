export default function BackgroundVideo({ src }) {
  // const isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
  return (
    <div>
      <video
        src={src}
        className="background-video"
        loop
        muted
        autoPlay
        playsInline
      ></video>
    </div>
  );
}
