import videoBg from "../files/videos/stickyricky.mp4";

export default function DbzPage() {
  return (
    <>
      <section className="dbz-section">
        <div className="dbz-container">
          <h1 className="title-text">DragonBall Z / TEST PAGE FOR NOW</h1>
          <p className="dbz-text"></p>
        </div>
        <div className="background-video">
          <video src={videoBg} autoPlay loop muted></video>
          <div className="content-overvideo">
            <h1>Welcome</h1>
            <p>To my site</p>
          </div>
        </div>
      </section>
    </>
  );
}
