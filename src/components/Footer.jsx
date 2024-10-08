import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About me</h5>
            <p>
              My name is Jussi Mehtälä and I'm from Finland. With this website
              I'm planning to learn more and show my programming cababilities by
              creating this project showcasing my interests and hobbies.
            </p>
          </Col>
          <Col md={4}>
            <h5>Socials</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://x.com/SKIPAHH" className="text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@SKIPAH"
                  className="text-white"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a href="https://www.twitch.tv/skipah" className="text-white">
                  Twitch
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/skipaah/"
                  className="text-white"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jussi-mehtala/"
                  className="text-white"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a href="https://github.com/SKIPAH" className="text-white">
                  GitHub
                </a>
              </li>
            </ul>
            <ul className="list-unstyled"></ul>
          </Col>
          <Col md={4}>
            <h5>Contact me</h5>
            <address>
              Email:{" "}
              <a href="juzzii.mehta@gmail.com" className="text-white">
                juzzii.mehta@gmail.com
              </a>
              <br />
              Phone: <a className="text-white">+358 44 3377 389</a>
            </address>
          </Col>
          <Row className="mt-3">
            <Col md={12} className="text-center">
              <p>&copy; 2024 Skipaduveinau. All Rights Reserved.</p>
            </Col>
          </Row>
        </Row>
      </Container>
    </footer>
  );
}
