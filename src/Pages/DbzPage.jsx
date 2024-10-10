import BackgroundVideo from "../components/BackgroundVideo";
import HorizontalPictures from "../components/HorizontalPictures";

export default function DbzPage() {
  return (
    <>
      <section className="dbz-section">
        <div className="dbz-container">
          <h1 className="title-text">TEST PAGE FOR NOW</h1>
          <p className="dbz-text"></p>
        </div>
        <BackgroundVideo></BackgroundVideo>
      </section>

      <HorizontalPictures></HorizontalPictures>
    </>
  );
}
