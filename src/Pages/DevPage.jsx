import UnityWebGL from "../components/UnityWebGL";

export default function DevPage() {
  return (
    <>
      <section className="dev-section">
        <div className="container">
          <h1 className="title-text">My development journey</h1>

          <p className="dev-text">
            I have recently graduated as a Bachelor of Engineering specialized
            in software development and I am currently looking for a job to
            start my career in tech industry.
          </p>
          <p>
            My{" "}
            <a
              href="https://www.linkedin.com/in/jussi-mehtala/"
              target="_blank"
            >
              Linkedin
            </a>{" "}
            and{" "}
            <a href="https://github.com/SKIPAH" target="_blank">
              GitHub
            </a>{" "}
            profiles.
          </p>
          <p>
            My{" "}
            <a href="src/files/jussi_mehtälä_CV_english.pdf" target="_blank">
              CV PDF
            </a>{" "}
            and{" "}
            <a
              href="src/files/jussi_mehtälä_PORTFOLIO_english.pdf"
              target="_blank"
            >
              Portfolio PDF
            </a>
          </p>

          <p>
            <a
              href="https://jussiprojects.itch.io/webglnucutest?secret=BtYgvJZZzU2b0GynO4y9q7XY5WU"
              target="_blank"
            >
              Itch IO project of my thesis
            </a>
          </p>
        </div>
      </section>
      <section className="webgl-section">
        <div>
          <p>TESTINGS</p>
          <UnityWebGL></UnityWebGL>
        </div>
      </section>
    </>
  );
}
