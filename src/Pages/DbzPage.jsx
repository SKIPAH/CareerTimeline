import BackgroundVideo from "../components/BackgroundVideo";
import HorizontalPictures from "../components/HorizontalPictures";
import bugati from "../files/videos/bugati.mp4";

export default function DbzPage() {
  return (
    <>
      <section className="dbz-section">
        <div className="dbz-container">
          <h1 className="title-text">TEST PAGE FOR NOW &#128511; &#128018;</h1>
          <p className="dbz-text"></p>
          <BackgroundVideo
            src={bugati}
            className="background-video"
          ></BackgroundVideo>
          <HorizontalPictures></HorizontalPictures>
        </div>
      </section>
    </>
  );
}
