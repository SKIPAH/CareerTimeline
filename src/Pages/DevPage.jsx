import UnityWebGL from "../components/UnityWebGL";
import { useLanguage } from "../hooks/useLanguage";
import { getTranslation } from "../components/Translations";

export default function DevPage() {
  const currentLanguage = useLanguage();

  return (
    <>
      <section className="dev-section">
        <div className="container">
          <h1 className="title-text">
            {getTranslation("dev-title", currentLanguage)}
          </h1>

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
            <a
              href="/jussi_mehtälä_CV_english.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV PDF
            </a>{" "}
            and{" "}
            <a
              href="/jussi_mehtälä_PORTFOLIO_english.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio PDF
            </a>
          </p>
          <p>
            <a
              href="https://www.theseus.fi/handle/10024/856201"
              target="_blank"
            >
              Link to whole thesis
            </a>
            <a
              href="https://jussiprojects.itch.io/webglnucutest?secret=BtYgvJZZzU2b0GynO4y9q7XY5WU"
              target="_blank"
            >
              Itch IO project of my thesis
            </a>
          </p>
        </div>
        <div className="container">
          <p>My WebGL project, which I made for my thesis.</p>
          <p>
            NOTE!! Project will not work on mobile devices most likely, as Unity
            WebGL does not support mobile properly yet. Enable hardware
            acceleration, if you are using Google Chrome
          </p>
          <UnityWebGL className="unity-webgl"></UnityWebGL>
        </div>
      </section>
    </>
  );
}
