import UnityWebGL from "../components/UnityWebGL";
import { useLanguage } from "../hooks/useLanguage";
import { getTranslation } from "../components/Translations";
import { useScrollAnimation } from "../components/ScrollAnimation";

export default function DevPage() {
  const currentLanguage = useLanguage();
  useScrollAnimation();

  return (
    <>
      <section className="dev-section">
        <div className="container">
          <h1 className="title-text hidden">
            {getTranslation("dev-title", currentLanguage)}
          </h1>
          <p className="hidden">
            <a
              href="https://www.linkedin.com/in/jussi-mehtala/"
              target="_blank"
            >
              Linkedin
            </a>{" "}
            <a href="https://github.com/SKIPAH" target="_blank">
              GitHub
            </a>{" "}
            <p>
              {getTranslation("dev-download", currentLanguage)}{" "}
              <a
                href="/jussi_mehtälä_CV_english.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </a>{" "}
            </p>
            <p>
              {getTranslation("dev-download", currentLanguage)}{" "}
              <a
                href="/jussi_mehtälä_PORTFOLIO_english.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </p>
          </p>
          <p className="hidden">
            <a
              href="https://www.theseus.fi/handle/10024/856201"
              target="_blank"
            >
              {getTranslation("dev-thesis", currentLanguage)}
            </a>
            <br></br>
            <a
              href="https://jussiprojects.itch.io/webglnucutest?secret=BtYgvJZZzU2b0GynO4y9q7XY5WU"
              target="_blank"
            >
              {getTranslation("dev-itch", currentLanguage)}
            </a>
          </p>
        </div>
        <div className="container">
          <p className="hidden">
            {getTranslation("dev-webgl", currentLanguage)}
          </p>
          <p className="hidden">
            {getTranslation("dev-webgl-note", currentLanguage)}
          </p>
          <UnityWebGL className="unity-webgl"></UnityWebGL>
        </div>
      </section>
    </>
  );
}
