import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getTranslation } from "./Translations";
import { useLanguage } from "../hooks/useLanguage";
import skipahlogo from "../files/images/SKIPAHlogo.webp";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function Footer() {
  const currentLanguage = useLanguage();
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <div>
          <Nav.Link as={NavLink} to={"/"}>
            <img className="navbar-home-logo-footer" src={skipahlogo} />
          </Nav.Link>
        </div>
        <Row>
          <Col md={4}>
            <h5>{getTranslation("aboutMe", currentLanguage)}</h5>
            <p>{getTranslation("aboutMe-text", currentLanguage)}</p>
          </Col>
          <Col md={4}>
            <h5>{getTranslation("followMe", currentLanguage)}</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://x.com/SKIPAHH" className="text-white">
                  Twitter/X
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
          </Col>
          <Col md={4}>
            <h5>{getTranslation("contactMe", currentLanguage)}</h5>
            <address>
              Email:{" "}
              <a href="mailto:juzzii.mehta@gmail.com" className="text-white">
                juzzii.mehta@gmail.com
              </a>
              <br />
            </address>
          </Col>
          <Row className="mt-3">
            <Col md={12} className="text-center">
              <p>&copy; Jussi Mehtälä 2025</p>
            </Col>
          </Row>
        </Row>
      </Container>
    </footer>
  );
}
