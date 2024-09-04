import { Container } from "react-bootstrap";

export default function DevPage() {
  return (
    <>
      <Container className="dev-container">
        <h1>My development journey</h1>

        <p>
          I have recently graduated as a Bachelor of Engineering specialized in
          software development and I am currently looking for a job to start my
          career in tech industry.
        </p>
        <p>
          My{" "}
          <a href="https://www.linkedin.com/in/jussi-mehtala/" target="_blank">
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
      </Container>
    </>
  );
}
