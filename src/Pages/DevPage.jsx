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
            {getTranslation("dev-text", currentLanguage)}
          </p>
          <p>
            {getTranslation("dev-linkedin", currentLanguage)}{" "}
            <a
              href="https://www.linkedin.com/in/jussi-mehtala/"
              target="_blank"
            >
              Linkedin
            </a>{" "}
            {getTranslation("dev-linkedin-2", currentLanguage)}{" "}
            <a href="https://github.com/SKIPAH" target="_blank">
              GitHub
            </a>{" "}
            {getTranslation("dev-github-3", currentLanguage)}.
          </p>
          <p>
            {getTranslation("dev-cv", currentLanguage)}{" "}
            <a
              href="/jussi_mehtälä_CV_english.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV PDF
            </a>{" "}
            {getTranslation("dev-cv-2", currentLanguage)}{" "}
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
          <p>{getTranslation("dev-webgl", currentLanguage)}</p>
          <p>
            {getTranslation("dev-webgl-note", currentLanguage)}
          </p>
          <UnityWebGL className="unity-webgl"></UnityWebGL>
        </div>
      </section>
    </>
  );
}
